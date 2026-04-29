# 📚 SE2 Quiz App

Quiz app HTML/CSS/JS đơn giản cho ôn tập môn **SE2 — Software Engineering 2 (HANU FIT)**.

## 🚀 Cách chạy

**Không cần web server** — mở thẳng trong browser:

```
Double-click vào file: index.html
```

Hoặc:
- Right-click → Open with → Chrome/Edge/Firefox

> Nếu browser chặn file local (CORS), thử Chrome/Edge.

## 📁 Cấu trúc

```
quiz-app/
├── index.html      # Single-page app
├── style.css       # Styling (responsive)
├── quiz.js         # Logic (vanilla JS, no framework)
├── data.js         # 9 lectures × ~12 questions each = ~108 questions
└── README.md       # File này
```

## 🎯 Tính năng

- ✅ **9 lecture sets**: Lec 1‑8 + Design Patterns (Lec 9‑11 gộp)
- ✅ **2 loại câu hỏi**: MCQ (4 lựa chọn) + Fill-in-blank
- ✅ **Feedback ngay lập tức**: hiển thị đúng/sai + giải thích sau mỗi câu
- ✅ **Progress bar** + score tracking
- ✅ **Result page** chi tiết: tổng điểm + review từng câu
- ✅ **Retry**: làm lại quiz cùng lecture
- ✅ **Mobile-friendly** (responsive)
- ✅ **Fill-in-blank**: case-insensitive, trim whitespace, accept multiple variants

## 📊 Số câu mỗi lecture

| Lecture | MCQ | Fill | Tổng |
|---|---|---|---|
| Lec 1 | 8 | 4 | 12 |
| Lec 2 | 8 | 4 | 12 |
| Lec 3 | 8 | 4 | 12 |
| Lec 4 | 8 | 4 | 12 |
| Lec 5 | 8 | 4 | 12 |
| Lec 6 | 8 | 4 | 12 |
| Lec 7 | 8 | 4 | 12 |
| Lec 8 | 8 | 4 | 12 |
| Lec 9-11 | 15 | 5 | 20 |
| **Tổng** | **79** | **37** | **116** |

## 🎨 Cách sử dụng

1. Mở `index.html` trong browser
2. Chọn 1 trong 9 lecture cards trên trang chủ
3. Trả lời từng câu, click "Trả lời" → xem feedback
4. Click "Câu tiếp →" để qua câu tiếp theo
5. Cuối quiz → xem tổng kết + chi tiết câu đúng/sai
6. Click "Làm lại" hoặc về "Trang chủ"

## 🔧 Tùy chỉnh

Muốn thêm/sửa câu hỏi? Mở `data.js`:

**MCQ format**:
```javascript
{
    type: "mcq",
    question: "Câu hỏi của bạn?",
    options: ["A", "B", "C", "D"],
    correct: 1,  // index của đáp án đúng (0-based)
    explanation: "Giải thích vì sao đáp án này đúng."
}
```

**Fill-in-blank format**:
```javascript
{
    type: "fill",
    question: "Câu có _____ chỗ trống.",
    answers: ["đáp án 1", "đáp án 2"],  // chấp nhận nhiều variant
    explanation: "Giải thích."
}
```

## ✅ Đáp án Fill-in-blank

So sánh:
- **Case-insensitive**: "JUnit" ≡ "junit" ≡ "JUNIT"
- **Trim whitespace**: " 4 " ≡ "4"
- **Multiple variants**: cả "two" và "2" đều chấp nhận nếu list có cả 2

## 📝 Note

Quiz này được build dựa trên nội dung 11 lectures HANU SE2. Không thay thế cho việc đọc slide gốc, chỉ là tool luyện trí nhớ + reflexes cho MCQ exam.

**Chúc bạn thi tốt! 🍀**
