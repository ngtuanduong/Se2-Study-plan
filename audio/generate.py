"""Generate SE2 study MP3 from script-vn.md using edge-tts.

Splits the script at [PAUSE N] markers, synthesizes each text segment with
edge-tts, generates N seconds of silence between segments, then concatenates
everything into a single MP3 with ffmpeg.

Usage:
    python generate.py [--voice vi-VN-HoaiMyNeural] [--out se2-study.mp3]

Voices to try:
    vi-VN-HoaiMyNeural   (female, warm)
    vi-VN-NamMinhNeural  (male, clear)
"""

import argparse
import asyncio
import re
import shutil
import subprocess
import sys
from pathlib import Path

import edge_tts

ROOT = Path(__file__).resolve().parent
SCRIPT_PATH = ROOT / "script-vn.md"
WORK_DIR = ROOT / "_work"

PAUSE_RE = re.compile(r"\[PAUSE\s+(\d+(?:\.\d+)?)\]")
CHAPTER_RE = re.compile(r"^\[CHAPTER:[^\]]*\]\s*$", re.MULTILINE)
META_LINE_RE = re.compile(r"^(#|>|---|Format:).*$", re.MULTILINE)


def load_script() -> str:
    raw = SCRIPT_PATH.read_text(encoding="utf-8")
    raw = META_LINE_RE.sub("", raw)
    raw = CHAPTER_RE.sub("", raw)
    return raw.strip()


def parse_segments(text: str):
    """Yield (kind, value) tuples: ('text', str) or ('pause', float seconds)."""
    pos = 0
    for m in PAUSE_RE.finditer(text):
        chunk = text[pos:m.start()].strip()
        if chunk:
            yield ("text", chunk)
        yield ("pause", float(m.group(1)))
        pos = m.end()
    tail = text[pos:].strip()
    if tail:
        yield ("text", tail)


async def synth_text(text: str, voice: str, out_path: Path, rate: str, pitch: str):
    if out_path.exists() and out_path.stat().st_size > 1024:
        return
    last_err = None
    for attempt in range(1, 9):
        try:
            communicate = edge_tts.Communicate(text=text, voice=voice, rate=rate, pitch=pitch)
            await communicate.save(str(out_path))
            return
        except (edge_tts.exceptions.NoAudioReceived, Exception) as e:
            last_err = e
            wait = min(60, 2 ** attempt)
            print(f"     retry {attempt}/8 after {wait}s ({type(e).__name__}: {e})")
            await asyncio.sleep(wait)
    raise RuntimeError(f"edge-tts failed after retries: {last_err}")


def synth_silence(seconds: float, out_path: Path):
    if out_path.exists() and out_path.stat().st_size > 100:
        return
    subprocess.run(
        [
            "ffmpeg", "-y", "-loglevel", "error",
            "-f", "lavfi", "-i", "anullsrc=r=24000:cl=mono",
            "-t", str(seconds),
            "-q:a", "9", "-acodec", "libmp3lame",
            str(out_path),
        ],
        check=True,
    )


def concat(parts: list[Path], out_path: Path):
    list_path = WORK_DIR / "concat.txt"
    list_path.write_text(
        "\n".join(f"file '{p.as_posix()}'" for p in parts),
        encoding="utf-8",
    )
    subprocess.run(
        [
            "ffmpeg", "-y", "-loglevel", "error",
            "-f", "concat", "-safe", "0", "-i", str(list_path),
            "-c", "copy",
            str(out_path),
        ],
        check=True,
    )


async def main():
    ap = argparse.ArgumentParser()
    ap.add_argument("--voice", default="vi-VN-HoaiMyNeural")
    ap.add_argument("--rate", default="-5%", help="speech rate, e.g. -10%, +0%, +5%")
    ap.add_argument("--pitch", default="+0Hz")
    ap.add_argument("--out", default=str(ROOT / "se2-study.mp3"))
    args = ap.parse_args()

    if shutil.which("ffmpeg") is None:
        sys.exit("ffmpeg not found in PATH")

    WORK_DIR.mkdir(parents=True, exist_ok=True)

    text = load_script()
    segments = list(parse_segments(text))
    if not segments:
        sys.exit("No segments parsed from script")

    parts: list[Path] = []
    for idx, (kind, value) in enumerate(segments):
        if kind == "text":
            preview = value[:60].replace("\n", " ")
            mp3 = WORK_DIR / f"seg-{idx:03d}.mp3"
            cached = mp3.exists() and mp3.stat().st_size > 1024
            tag = "cache" if cached else "text "
            print(f"[{idx:03d}] {tag} {len(value):5d} chars  | {preview}…", flush=True)
            await synth_text(value, args.voice, mp3, args.rate, args.pitch)
            parts.append(mp3)
            if not cached:
                await asyncio.sleep(0.5)
        else:
            print(f"[{idx:03d}] pause {value:>5.1f}s", flush=True)
            mp3 = WORK_DIR / f"sil-{idx:03d}.mp3"
            synth_silence(value, mp3)
            parts.append(mp3)

    out = Path(args.out)
    print(f"\nConcatenating {len(parts)} parts → {out}")
    concat(parts, out)
    size_mb = out.stat().st_size / (1024 * 1024)
    print(f"Done. {out} ({size_mb:.1f} MB)")


if __name__ == "__main__":
    asyncio.run(main())
