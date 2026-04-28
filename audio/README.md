# SE2 Study Audio

Sinh file MP3 ôn tập SE2 để nghe khi chạy bộ. Nội dung tiếng Việt + xen kẽ thuật ngữ tiếng Anh, có câu hỏi kiểm tra với 10 giây nghỉ giữa câu hỏi và đáp án.

## Vì sao không dùng VibeVoice

Mình đã khảo sát [microsoft/VibeVoice](https://github.com/microsoft/VibeVoice). Tóm tắt:

- **VibeVoice-TTS-1.5B** (long-form, multi-speaker): Microsoft đã **gỡ code** vì lý do trách nhiệm AI sau khi bị lạm dụng. Chỉ còn weights trên Hugging Face nhưng không tải về dùng được vì code generation đã bị xóa.
- **VibeVoice-Realtime-0.5B**: vẫn open-source, chạy được trên Mac M4 (MPS). Cài qua `pip install -e .[streamingtts]` rồi `python demo/realtime_model_inference_from_file.py --model_path microsoft/VibeVoice-Realtime-0.5B --txt_path script.txt --speaker_name Carter`.
- **Hạn chế quyết định:** Realtime-0.5B chỉ hỗ trợ **English**. Microsoft cảnh báo trong docs: *"The model is currently intended for English speech only; other languages may produce unpredictable results."* Có 9 ngôn ngữ thực nghiệm thêm sau (DE/FR/IT/JP/KR/NL/PL/PT/ES) nhưng **không có tiếng Việt**.

→ Yêu cầu của bạn (giải thích VN + chèn EN terms) không phù hợp với VibeVoice. Mình chuyển sang **edge-tts** — Microsoft Azure neural voices, có giọng `vi-VN-HoaiMyNeural` và `vi-VN-NamMinhNeural` chất lượng cao, free, output MP3 trực tiếp.

## Cấu trúc

```
audio/
├── README.md          ← file này
├── script-vn.md       ← script narration (sửa nội dung tại đây)
├── generate.py        ← generator: split script → edge-tts → ffmpeg concat
├── .venv/             ← virtualenv với edge-tts
├── _work/             ← các file MP3 trung gian (mỗi segment 1 file)
└── se2-study.mp3      ← output cuối cùng
```

## Yêu cầu hệ thống

- macOS / Linux / Windows
- Python ≥ 3.10
- ffmpeg (để tạo silence và concat MP3)
- Internet (edge-tts gọi Azure cloud)

## Setup từ đầu (đã làm xong rồi)

```bash
brew install python@3.11 ffmpeg
cd /Users/avada/Desktop/Se2-Study-plan/audio
python3.11 -m venv .venv
.venv/bin/pip install edge-tts
```

## Generate MP3

```bash
cd /Users/avada/Desktop/Se2-Study-plan/audio
.venv/bin/python generate.py
```

Mặc định: `vi-VN-HoaiMyNeural` (giọng nữ), tốc độ -5%, output `se2-study.mp3`.

### Tùy chỉnh giọng / tốc độ

```bash
# Giọng nam
.venv/bin/python generate.py --voice vi-VN-NamMinhNeural

# Đọc nhanh hơn 10%
.venv/bin/python generate.py --rate "+10%"

# Đọc chậm hơn để dễ ngấm khi chạy
.venv/bin/python generate.py --rate "-15%"

# Đổi tên file output
.venv/bin/python generate.py --out se2-bai-on-tap.mp3
```

### Chỉnh sửa nội dung

Mở `script-vn.md`, sửa nội dung. Markers cần giữ nguyên format:

- `[CHAPTER: ...]` chỉ là marker phân chương cho người đọc, được generator strip ra trước khi đọc.
- `[PAUSE 10]` là silence 10 giây — generator sẽ chèn `anullsrc` từ ffmpeg.
- Số trong `[PAUSE N]` là số giây (số nguyên hoặc thập phân).

Sau khi sửa, chạy lại `generate.py`.

## Cách generator hoạt động

1. Đọc `script-vn.md`, strip metadata và `[CHAPTER:...]`.
2. Split tại regex `[PAUSE N]`. Mỗi segment text → MP3 qua edge-tts. Mỗi pause → MP3 silence qua `ffmpeg anullsrc`.
3. Lưu vào `_work/seg-NNN.mp3` và `_work/sil-NNN.mp3`.
4. Concat tất cả bằng `ffmpeg -f concat -c copy` → file output.

Nếu edge-tts báo `NoAudioReceived` (Azure throttle), generator retry 4 lần với backoff.

## Mẹo nghe khi chạy bộ

- Tốc độ chạy ổn định → chọn `--rate "-10%"` để não dễ tiếp thu.
- Nghe đi nghe lại 3-4 lần. Lần đầu để hiểu, lần sau để thuộc thuật ngữ EN.
- Khi đến câu hỏi, có 10 giây yên lặng — cố gắng tự trả lời thành tiếng. Nếu trả lời được trước khi đáp án phát → đã thuộc.
- Nếu chỉ cần phần thuật ngữ tiếng Anh, có thể tách riêng: copy phần "Các thuật ngữ tiếng Anh cần nhớ" của từng lecture sang một script con và sinh MP3 riêng.

## Backup: nếu muốn thử VibeVoice (English-only)

Khi nào bạn muốn ôn các fill-in-blank tiếng Anh chính xác (đặc biệt các quote nguyên gốc từ slide), VibeVoice có thể đọc tự nhiên hơn cho EN. Quy trình:

```bash
git clone https://github.com/microsoft/VibeVoice.git
cd VibeVoice
python3.11 -m venv .venv
.venv/bin/pip install -e .[streamingtts]
.venv/bin/python demo/realtime_model_inference_from_file.py \
    --model_path microsoft/VibeVoice-Realtime-0.5B \
    --txt_path your_english_script.txt \
    --speaker_name Carter \
    --device mps
```

Output: WAV 24kHz tại `outputs/`. Convert sang MP3:

```bash
ffmpeg -i outputs/your_english_script_generated.wav -q:a 4 out.mp3
```

Voices có sẵn: `Carter`, `Davis`, `Frank`, `Mike` (nam), `Emma`, `Grace` (nữ). Sample rate 24kHz, single speaker, ≤10 phút audio mỗi lần generate (8k context window).
