/* ===== 刷题引擎 ===== */
const Quiz = {
  allQuestions: QUIZ_DATA || [],
  filteredQuestions: [],
  currentIndex: 0,
  answered: {},    // { questionId: userAnswer }
  score: {},       // { questionId: true/false }
  filter: 'all',
  isShuffled: false,

  initialized: false,

  init() {
    if (this.initialized) return;
    this.initialized = true;
    this.loadState();
    this.applyFilter();
  },

  loadState() {
    try {
      const saved = JSON.parse(localStorage.getItem('quizAnswered') || '{}');
      this.answered = saved;
      const savedScore = JSON.parse(localStorage.getItem('quizScore') || '{}');
      this.score = savedScore;
    } catch(e) {
      this.answered = {};
      this.score = {};
    }
  },

  saveState() {
    localStorage.setItem('quizAnswered', JSON.stringify(this.answered));
    localStorage.setItem('quizScore', JSON.stringify(this.score));
  },

  applyFilter(filter) {
    if (filter) this.filter = filter;
    let qs = [...this.allQuestions];
    if (this.isShuffled) {
      qs = this.shuffle(qs);
    }
    if (this.filter !== 'all') {
      qs = qs.filter(q => q.type === this.filter);
    }
    this.filteredQuestions = qs;
    this.currentIndex = 0;
    this.renderQuestion();
    this.updateStats();
  },

  shuffle(arr) {
    const a = [...arr];
    for (let i = a.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      [a[i], a[j]] = [a[j], a[i]];
    }
    return a;
  },

  toggleShuffle() {
    this.isShuffled = !this.isShuffled;
    this.applyFilter();
    document.getElementById('shuffleBtn').textContent = this.isShuffled ? '🔀 已随机' : '🔀 随机';
  },

  reset() {
    if (!confirm('确定要重置所有答题记录吗？')) return;
    this.answered = {};
    this.score = {};
    this.currentIndex = 0;
    this.saveState();
    this.renderQuestion();
    this.updateStats();
  },

  getCurrent() {
    return this.filteredQuestions[this.currentIndex];
  },

  renderQuestion() {
    const q = this.getCurrent();
    if (!q) {
      document.getElementById('quizCard').innerHTML = '<div class="quiz-empty"><p>没有找到题目</p></div>';
      return;
    }

    document.getElementById('quizQnum').textContent = `第 ${this.currentIndex + 1} 题 / 共 ${this.filteredQuestions.length} 题`;

    const typeMap = { single: '单选题', multi: '多选题', fill: '填空题', short: '简答题' };
    document.getElementById('quizQtype').textContent = typeMap[q.type] || q.type;

    // Stem
    document.getElementById('quizStem').innerHTML = this.formatStem(q.stem);

    // Options
    const optArea = document.getElementById('quizOptions');
    const inputArea = document.getElementById('quizInputArea');
    const revealBtn = document.getElementById('revealBtn');

    if (q.type === 'single' || q.type === 'multi') {
      optArea.style.display = 'block';
      inputArea.style.display = 'none';
      revealBtn.style.display = 'block';

      const isMulti = q.type === 'multi';
      const userAns = this.answered[q.id] || '';
      const answeredOpts = isMulti ? (userAns ? userAns.split('') : []) : userAns;

      optArea.innerHTML = Object.entries(q.options).map(([key, val]) => {
        let cls = 'quiz-option';
        const isSelected = isMulti ? answeredOpts.includes(key) : answeredOpts === key;

        // Show correct/incorrect after answering
        if (userAns) {
          const correctOpts = q.answer.replace(/[\s,，、]+/g, '').split('');
          if (correctOpts.includes(key)) {
            cls += ' correct';
          } else if (isSelected) {
            cls += ' incorrect';
          }
        } else if (isSelected) {
          cls += ' selected';
        }

        return `<div class="${cls}" data-value="${key}" data-qid="${q.id}" data-type="${q.type}">
          <span class="opt-key">${key}</span>
          <span class="opt-text">${val}</span>
          ${userAns && q.answer.replace(/[\s,，、]+/g, '').includes(key) ? '<span class="opt-mark">✓</span>' : ''}
        </div>`;
      }).join('');

    } else if (q.type === 'fill') {
      optArea.style.display = 'none';
      inputArea.style.display = 'flex';
      revealBtn.style.display = 'block';
      document.getElementById('quizInput').value = this.answered[q.id] || '';
      document.getElementById('quizInput').focus();

    } else { // short answer
      optArea.style.display = 'none';
      inputArea.style.display = 'none';
      revealBtn.style.display = 'block';
    }

    // Result area
    const resultArea = document.getElementById('quizResult');
    const explArea = document.getElementById('quizExplanation');

    if (this.answered[q.id] !== undefined) {
      resultArea.style.display = 'block';
      const isCorrect = this.score[q.id];
      const correctOpts = q.answer.replace(/[\s,，、]+/g, '').split('').join(', ');

      if (q.type === 'single' || q.type === 'multi') {
        const correctText = Object.entries(q.options)
          .filter(([k]) => correctOpts.includes(k))
          .map(([,v]) => v)
          .join('; ');
        resultArea.innerHTML = isCorrect
          ? `<div class="result-correct">✅ 回答正确！</div>`
          : `<div class="result-incorrect">❌ 回答错误</div>
             <div class="correct-answer">正确答案：<strong>${correctOpts}</strong><br><span class="correct-text">${correctText}</span></div>`;
      } else {
        resultArea.innerHTML = isCorrect
          ? `<div class="result-correct">✅ 回答正确！</div>`
          : `<div class="result-incorrect">❌ 回答错误</div>
             <div class="correct-answer">参考答案：<strong>${q.answer}</strong></div>`;
      }
    } else {
      resultArea.style.display = 'none';
    }

    // Explanation area for short answer
    if (q.type === 'short') {
      explArea.style.display = this.answered[q.id] ? 'block' : 'none';
      if (this.answered[q.id]) {
        explArea.innerHTML = `<div class="short-answer"><strong>参考答案：</strong><br>${this.formatAnswer(q.answer)}</div>`;
      }
    } else {
      explArea.style.display = 'none';
    }

    this.updateNav();
    this.updateStats();
  },

  formatStem(stem) {
    if (!stem) return '<p>（题目加载中）</p>';
    // Highlight blanks in fill-in questions
    return stem.replace(/_{2,}/g, '<span class="blank-mark">______</span>');
  },

  formatAnswer(ans) {
    if (!ans) return '<span class="no-answer">（暂无参考答案）</span>';
    return ans.replace(/\n/g, '<br>');
  },

  handleOptionClick(e) {
    const opt = e.target.closest('.quiz-option');
    if (!opt) return;
    const qid = opt.dataset.qid;
    if (this.answered[qid]) return; // already answered

    const type = opt.dataset.type;
    const value = opt.dataset.value;
    const q = this.allQuestions.find(q => q.id === qid);
    if (!q) return;

    let userAnswer;
    if (type === 'single') {
      userAnswer = value;
    } else { // multi
      const current = this.answered[qid] || '';
      const selected = current ? current.split('') : [];
      const idx = selected.indexOf(value);
      if (idx > -1) {
        selected.splice(idx, 1);
      } else {
        selected.push(value);
      }
      selected.sort();
      if (selected.length === 0) {
        delete this.answered[qid];
        delete this.score[qid];
        this.saveState();
        this.renderQuestion();
        return;
      }
      userAnswer = selected.join('');
    }

    this.answered[q.id] = userAnswer;
    const correctOpts = q.answer.replace(/[\s,，、]+/g, '').split('').sort().join('');
    const userOpts = userAnswer.split('').sort().join('');
    this.score[q.id] = userOpts === correctOpts;
    this.saveState();
    this.renderQuestion();
  },

  handleInputSubmit() {
    const q = this.getCurrent();
    if (!q || q.type !== 'fill') return;
    if (this.answered[q.id]) return;

    const input = document.getElementById('quizInput');
    const userAnswer = input.value.trim();
    if (!userAnswer) return;

    this.answered[q.id] = userAnswer;
    // Check if answer is included (fuzzy match for fill-in)
    const correct = q.answer.replace(/\s+/g, '');
    const user = userAnswer.replace(/\s+/g, '');
    this.score[q.id] = correct.includes(user) || user.includes(correct);
    this.saveState();
    this.renderQuestion();
  },

  revealAnswer() {
    const q = this.getCurrent();
    if (!q) return;

    if (this.answered[q.id]) return;

    if (q.type === 'short') {
      this.answered[q.id] = 'revealed';
      this.score[q.id] = false; // neutral for short answer
      this.saveState();
      this.renderQuestion();
      return;
    }

    // Auto-answer with nothing for other types as reveal
    this.answered[q.id] = 'revealed';
    if (q.type !== 'short') {
      this.score[q.id] = false;
    }
    this.saveState();
    this.renderQuestion();
  },

  prevQuestion() {
    if (this.currentIndex > 0) {
      this.currentIndex--;
      this.renderQuestion();
    }
  },

  nextQuestion() {
    if (this.currentIndex < this.filteredQuestions.length - 1) {
      this.currentIndex++;
      this.renderQuestion();
    }
  },

  updateNav() {
    document.getElementById('prevBtn').disabled = this.currentIndex === 0;
    document.getElementById('nextBtn').disabled = this.currentIndex >= this.filteredQuestions.length - 1;
  },

  updateStats() {
    const total = this.filteredQuestions.length;
    const current = this.currentIndex + 1;
    document.getElementById('quizProgressText').textContent = `${current}/${total}`;
    document.getElementById('quizProgressFill').style.width = `${(current / total) * 100}%`;

    // Calculate score
    const answeredCount = Object.keys(this.score).length;
    const correctCount = Object.values(this.score).filter(v => v === true).length;
    const pct = answeredCount > 0 ? Math.round((correctCount / answeredCount) * 100) : 0;
    document.getElementById('quizScore').textContent = answeredCount > 0
      ? `✅ ${correctCount}/${answeredCount} (${pct}%)`
      : '正确率: --%';
  },

  eventsBound: false,

  bindEvents() {
    if (this.eventsBound) return;
    this.eventsBound = true;
    // Filter buttons
    document.querySelectorAll('.quiz-filter-btn').forEach(btn => {
      btn.addEventListener('click', () => {
        document.querySelectorAll('.quiz-filter-btn').forEach(b => b.classList.remove('active'));
        btn.classList.add('active');
        this.applyFilter(btn.dataset.filter);
      });
    });

    // Option clicks (delegated)
    document.getElementById('quizOptions').addEventListener('click', (e) => this.handleOptionClick(e));

    // Navigation
    document.getElementById('prevBtn').addEventListener('click', () => this.prevQuestion());
    document.getElementById('nextBtn').addEventListener('click', () => this.nextQuestion());
    document.getElementById('revealBtn').addEventListener('click', () => this.revealAnswer());

    // Shuffle
    document.getElementById('shuffleBtn').addEventListener('click', () => this.toggleShuffle());

    // Reset
    document.getElementById('resetBtn').addEventListener('click', () => this.reset());

    // Input submit
    document.getElementById('submitInputBtn').addEventListener('click', () => this.handleInputSubmit());
    document.getElementById('quizInput').addEventListener('keydown', (e) => {
      if (e.key === 'Enter') this.handleInputSubmit();
    });

    // Keyboard shortcuts
    document.addEventListener('keydown', (e) => {
      if (document.getElementById('quizArea').style.display === 'none') return;
      if (e.target.tagName === 'INPUT') return;
      if (e.key === 'ArrowLeft') this.prevQuestion();
      if (e.key === 'ArrowRight') this.nextQuestion();
      if (e.key === ' ' || e.key === 'Enter') {
        e.preventDefault();
        this.revealAnswer();
      }
    });
  }
};
