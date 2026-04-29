// ===== State =====
let currentLecture = null;
let currentQuestionIndex = 0;
let score = 0;
let userAnswers = [];   // [{questionIndex, userAnswer, correct}]
let answered = false;   // whether current question already answered

// ===== DOM helpers =====
const $ = (id) => document.getElementById(id);
const showView = (viewId) => {
    document.querySelectorAll('.view').forEach(v => v.classList.remove('active'));
    $(viewId).classList.add('active');
};

// ===== Init: render lecture grid =====
function initHome() {
    const grid = $('lecture-grid');
    grid.innerHTML = '';

    Object.entries(QUIZ_DATA).forEach(([key, lecture]) => {
        const mcqCount = lecture.questions.filter(q => q.type === 'mcq').length;
        const fillCount = lecture.questions.filter(q => q.type === 'fill').length;

        const card = document.createElement('div');
        card.className = 'lecture-card';
        card.innerHTML = `
            <h3>${lecture.title}</h3>
            <div class="topics">${lecture.topics}</div>
            <div class="stats">
                <span class="stat-pill">📝 ${mcqCount} MCQ</span>
                <span class="stat-pill">✏️ ${fillCount} Fill</span>
                <span class="stat-pill">⏱️ ~${lecture.questions.length * 30}s</span>
            </div>
        `;
        card.addEventListener('click', () => startQuiz(key));
        grid.appendChild(card);
    });
}

// ===== Start quiz =====
function startQuiz(lectureKey) {
    currentLecture = QUIZ_DATA[lectureKey];
    currentQuestionIndex = 0;
    score = 0;
    userAnswers = [];

    $('quiz-title').textContent = currentLecture.title;
    $('total-q').textContent = currentLecture.questions.length;

    showView('quiz-view');
    renderQuestion();
}

// ===== Render question =====
function renderQuestion() {
    const q = currentLecture.questions[currentQuestionIndex];
    answered = false;

    // Update progress
    $('current-q').textContent = currentQuestionIndex + 1;
    $('score').textContent = score;
    const progress = ((currentQuestionIndex) / currentLecture.questions.length) * 100;
    $('progress-fill').style.width = progress + '%';

    // Question type badge
    const badge = $('q-type-badge');
    if (q.type === 'mcq') {
        badge.textContent = 'MCQ';
        badge.className = 'question-type-badge';
    } else {
        badge.textContent = 'FILL-IN-BLANK';
        badge.className = 'question-type-badge fill';
    }

    $('question-text').innerHTML = q.question;

    const ansContainer = $('answers-container');
    ansContainer.innerHTML = '';

    if (q.type === 'mcq') {
        q.options.forEach((opt, idx) => {
            const label = document.createElement('label');
            label.className = 'option';
            label.innerHTML = `
                <input type="radio" name="answer" value="${idx}">
                ${escapeHtml(opt)}
            `;
            label.addEventListener('click', () => {
                if (answered) return;
                document.querySelectorAll('.option').forEach(o => o.classList.remove('selected'));
                label.classList.add('selected');
            });
            ansContainer.appendChild(label);
        });
    } else if (q.type === 'fill') {
        const input = document.createElement('input');
        input.type = 'text';
        input.className = 'fill-input';
        input.placeholder = 'Nhập đáp án ở đây...';
        input.id = 'fill-input';
        input.autocomplete = 'off';
        input.addEventListener('keypress', (e) => {
            if (e.key === 'Enter' && !answered) {
                e.preventDefault();
                submitAnswer();
            }
        });
        ansContainer.appendChild(input);
        setTimeout(() => input.focus(), 50);
    }

    // Reset feedback & buttons
    $('feedback').classList.add('hidden');
    $('submit-btn').classList.remove('hidden');
    $('next-btn').classList.add('hidden');
}

// ===== Submit answer =====
function submitAnswer() {
    const q = currentLecture.questions[currentQuestionIndex];
    let userAnswer, isCorrect;

    if (q.type === 'mcq') {
        const selected = document.querySelector('input[name="answer"]:checked');
        if (!selected) {
            alert('Vui lòng chọn 1 đáp án!');
            return;
        }
        userAnswer = parseInt(selected.value);
        isCorrect = userAnswer === q.correct;

        // Highlight options
        document.querySelectorAll('.option').forEach((opt, idx) => {
            opt.classList.add('disabled');
            opt.querySelector('input').disabled = true;
            if (idx === q.correct) opt.classList.add('correct');
            else if (idx === userAnswer && !isCorrect) opt.classList.add('wrong');
        });
    } else {
        const input = $('fill-input');
        userAnswer = input.value.trim();
        if (!userAnswer) {
            alert('Vui lòng nhập đáp án!');
            return;
        }
        isCorrect = checkFillAnswer(userAnswer, q.answers);
        input.disabled = true;
        input.classList.add(isCorrect ? 'correct' : 'wrong');
    }

    answered = true;
    if (isCorrect) score++;

    userAnswers.push({
        questionIndex: currentQuestionIndex,
        userAnswer,
        correct: isCorrect
    });

    // Show feedback
    const fb = $('feedback');
    fb.classList.remove('hidden', 'correct', 'wrong');
    fb.classList.add(isCorrect ? 'correct' : 'wrong');
    $('feedback-text').textContent = isCorrect
        ? '✅ Chính xác!'
        : `❌ Sai. Đáp án đúng: ${q.type === 'mcq' ? q.options[q.correct] : q.answers[0]}`;
    $('explanation').textContent = q.explanation || '';

    // Update score display
    $('score').textContent = score;

    // Toggle buttons
    $('submit-btn').classList.add('hidden');
    $('next-btn').classList.remove('hidden');
    $('next-btn').textContent = currentQuestionIndex + 1 === currentLecture.questions.length
        ? '🎯 Xem kết quả'
        : 'Câu tiếp →';
}

// ===== Check fill-in-blank answer (case-insensitive, accept multiple variants) =====
function checkFillAnswer(userInput, validAnswers) {
    const normalized = userInput.trim().toLowerCase();
    return validAnswers.some(ans => ans.toLowerCase() === normalized);
}

// ===== Next question or end =====
function nextQuestion() {
    currentQuestionIndex++;
    if (currentQuestionIndex >= currentLecture.questions.length) {
        showResults();
    } else {
        renderQuestion();
    }
}

// ===== Show results =====
function showResults() {
    const total = currentLecture.questions.length;
    const percentage = Math.round((score / total) * 100);

    $('final-score').textContent = score;
    $('final-total').textContent = total;
    $('result-percentage').textContent = percentage + '%';

    // Score circle color + message
    const circle = $('score-circle');
    circle.className = 'score-circle';
    let msg;
    if (percentage >= 90) {
        circle.classList.add('excellent');
        msg = '🏆 Xuất sắc! Bạn đã sẵn sàng cho bài thi.';
    } else if (percentage >= 75) {
        circle.classList.add('good');
        msg = '👍 Tốt! Cố gắng ôn thêm các câu sai.';
    } else if (percentage >= 50) {
        circle.classList.add('average');
        msg = '⚠️ Trung bình. Cần ôn lại lecture này.';
    } else {
        circle.classList.add('poor');
        msg = '📖 Cần học lại từ đầu lecture này.';
    }
    $('result-message').textContent = msg;

    // Detail list
    const details = $('result-details');
    details.innerHTML = '';
    userAnswers.forEach((ans, idx) => {
        const q = currentLecture.questions[ans.questionIndex];
        const item = document.createElement('div');
        item.className = 'result-detail-item ' + (ans.correct ? 'correct' : 'wrong');

        const yourAnsText = q.type === 'mcq'
            ? (q.options[ans.userAnswer] || '(không chọn)')
            : ans.userAnswer;

        const correctAnsText = q.type === 'mcq'
            ? q.options[q.correct]
            : q.answers[0];

        item.innerHTML = `
            <h4>${idx + 1}. ${escapeHtml(q.question)}</h4>
            <p class="your-answer">Bạn trả lời: <strong>${escapeHtml(yourAnsText)}</strong> ${ans.correct ? '✅' : '❌'}</p>
            ${!ans.correct ? `<p class="correct-answer">Đáp án đúng: <strong>${escapeHtml(correctAnsText)}</strong></p>` : ''}
            ${q.explanation ? `<p class="ans-explanation">💡 ${escapeHtml(q.explanation)}</p>` : ''}
        `;
        details.appendChild(item);
    });

    showView('result-view');
}

// ===== Escape HTML =====
function escapeHtml(s) {
    if (typeof s !== 'string') s = String(s);
    return s.replace(/&/g, '&amp;')
            .replace(/</g, '&lt;')
            .replace(/>/g, '&gt;')
            .replace(/"/g, '&quot;')
            .replace(/'/g, '&#039;');
}

// ===== Event listeners =====
document.addEventListener('DOMContentLoaded', () => {
    initHome();

    $('submit-btn').addEventListener('click', submitAnswer);
    $('next-btn').addEventListener('click', nextQuestion);
    $('back-home-btn').addEventListener('click', () => {
        if (confirm('Bạn có muốn thoát quiz hiện tại? Tiến độ sẽ mất.')) {
            showView('home-view');
        }
    });
    $('retry-btn').addEventListener('click', () => {
        // Re-start same quiz
        const lectureKey = Object.keys(QUIZ_DATA).find(k => QUIZ_DATA[k] === currentLecture);
        startQuiz(lectureKey);
    });
    $('home-btn-result').addEventListener('click', () => {
        showView('home-view');
    });
});
