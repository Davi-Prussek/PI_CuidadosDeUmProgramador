// Dados das perguntas do quiz
const questions = [
    {
        question: "Em programação, o que seria mais parecido com uma 'alimentação saudável'?",
        options: [
            "Código limpo e bem estruturado",
            "Copiar e colar código sem entender",
            "Variáveis com nomes confusos",
            "Código sem comentários"
        ],
        correct: 0,
        explanation: "Assim como uma alimentação saudável nutre o corpo, código limpo e bem estruturado 'nutre' o projeto, facilitando manutenção e evolução!"
    },
    {
        question: "Assim como o cérebro precisa de descanso, o que o computador precisa para não sobrecarregar?",
        options: [
            "Compilar mais vezes",
            "Limpar a memória/cache",
            "Desligar o antivírus",
            "Aumentar o brilho da tela"
        ],
        correct: 1,
        explanation: "Limpar a memória e cache é como dar um 'descanso' para o computador, liberando recursos e melhorando a performance!"
    },
    {
        question: "Qual dos hábitos abaixo ajuda na saúde mental e também na programação?",
        options: [
            "Dormir bem",
            "Comer fast food",
            "Ignorar erros no código",
            "Trabalhar sem pausas"
        ],
        correct: 0,
        explanation: "Dormir bem é fundamental tanto para a saúde mental quanto para ter clareza de pensamento na programação!"
    },
    {
        question: "Em nutrição, 'junk food' é prejudicial. Em programação, o que seria um exemplo de 'junk code'?",
        options: [
            "Código bem documentado",
            "Funções gigantes e confusas",
            "Testes automatizados",
            "Algoritmos otimizados"
        ],
        correct: 1,
        explanation: "Funções gigantes e confusas são o 'junk food' da programação - podem até funcionar, mas prejudicam a saúde do projeto!"
    },
    {
        question: "O que se assemelha ao exercício físico regular no mundo da programação?",
        options: [
            "Refatorar e revisar código",
            "Ficar sem versionamento",
            "Usar console.log em tudo",
            "Nunca atualizar o sistema"
        ],
        correct: 0,
        explanation: "Refatorar e revisar código é como fazer exercícios regulares - mantém o código 'em forma' e saudável!"
    },
    {
        question: "O corpo humano precisa de hidratação constante. Qual seria a 'água' da programação?",
        options: [
            "Internet",
            "Comentários no código",
            "Atualizações de software",
            "Boas práticas de versionamento"
        ],
        correct: 3,
        explanation: "Boas práticas de versionamento são como a água para o projeto - essenciais para manter tudo funcionando e organizado!"
    },
    {
        question: "O que pode causar um 'burnout digital' no programador?",
        options: [
            "Pausas regulares",
            "Boa ergonomia",
            "Trabalhar horas seguidas sem descanso",
            "Estudo com moderação"
        ],
        correct: 2,
        explanation: "Trabalhar horas seguidas sem descanso é o caminho certo para o burnout - tanto físico quanto digital!"
    },
    {
        question: "Se vitaminas ajudam o corpo, o que ajuda o código a ficar 'forte'?",
        options: [
            "Documentação clara",
            "Código duplicado",
            "Falta de testes",
            "Ignorar bugs"
        ],
        correct: 0,
        explanation: "Documentação clara é como as vitaminas para o código - fortalece o entendimento e facilita a manutenção!"
    },
    {
        question: "Qual a semelhança entre alongamento físico e debugging?",
        options: [
            "Ambos são perda de tempo",
            "Ambos previnem problemas maiores",
            "Não têm utilidade prática",
            "São feitos apenas no início"
        ],
        correct: 1,
        explanation: "Assim como alongamento previne lesões, debugging previne problemas maiores no futuro - ambos são investimentos em saúde!"
    },
    {
        question: "Em saúde, o excesso faz mal. Em programação, o excesso de quê pode 'adoecer' o projeto?",
        options: [
            "Testes automatizados",
            "Comentários explicativos",
            "Dependências externas desnecessárias",
            "Planejamento"
        ],
        correct: 2,
        explanation: "Dependências desnecessárias são como o excesso de medicamentos - podem causar mais problemas do que soluções!"
    }
];

// Variáveis globais
let currentQuestion = 0;
let score = 0;
let correctAnswers = 0;
let wrongAnswers = 0;
let selectedAnswer = null;
let questionsOrder = [];

// Elementos DOM
const questionElement = document.getElementById('question');
const optionsContainer = document.getElementById('options');
const feedbackContainer = document.getElementById('feedback');
const nextBtn = document.getElementById('nextBtn');
const progressFill = document.getElementById('progressFill');
const progressText = document.getElementById('progressText');
const scoreElement = document.getElementById('score');
const correctElement = document.getElementById('correct');
const resultContainer = document.getElementById('resultContainer');
const finalScoreElement = document.getElementById('finalScore');
const resultMessageElement = document.getElementById('resultMessage');
const finalCorrectElement = document.getElementById('finalCorrect');
const finalWrongElement = document.getElementById('finalWrong');
const finalPointsElement = document.getElementById('finalPoints');
const restartBtn = document.getElementById('restartBtn');

// Inicialização
function init() {
    // Embaralhar perguntas
    questionsOrder = [...Array(questions.length).keys()].sort(() => Math.random() - 0.5);
    currentQuestion = 0;
    score = 0;
    correctAnswers = 0;
    wrongAnswers = 0;
    selectedAnswer = null;
    
    showQuestion();
    updateProgress();
    updateScore();
}

// Mostrar pergunta atual
function showQuestion() {
    const questionIndex = questionsOrder[currentQuestion];
    const questionData = questions[questionIndex];
    
    questionElement.textContent = `${currentQuestion + 1}. ${questionData.question}`;
    optionsContainer.innerHTML = '';
    
    questionData.options.forEach((option, index) => {
        const optionElement = document.createElement('div');
        optionElement.className = `option option-${String.fromCharCode(65 + index).toLowerCase()}`;
        optionElement.innerHTML = `
            <span class="option-icon">${String.fromCharCode(65 + index)}</span>
            <span>${option}</span>
        `;
        
        optionElement.addEventListener('click', () => selectAnswer(index));
        optionsContainer.appendChild(optionElement);
    });
    
    // Resetar estado
    selectedAnswer = null;
    nextBtn.disabled = true;
    feedbackContainer.classList.remove('show');
    feedbackContainer.innerHTML = '';
}

// Selecionar resposta
function selectAnswer(answerIndex) {
    if (selectedAnswer !== null) return; // Prevenir múltiplas seleções
    
    selectedAnswer = answerIndex;
    
    // Remover seleção anterior
    document.querySelectorAll('.option').forEach(option => {
        option.classList.remove('selected');
    });
    
    // Marcar opção selecionada
    document.querySelectorAll('.option')[answerIndex].classList.add('selected');
    
    // Habilitar botão próxima
    nextBtn.disabled = false;
    
    // Adicionar animação
    document.querySelectorAll('.option')[answerIndex].classList.add('pulse');
    setTimeout(() => {
        document.querySelectorAll('.option')[answerIndex].classList.remove('pulse');
    }, 500);
}

// Verificar resposta
function checkAnswer() {
    const questionIndex = questionsOrder[currentQuestion];
    const questionData = questions[questionIndex];
    const isCorrect = selectedAnswer === questionData.correct;
    
    // Atualizar pontuação
    if (isCorrect) {
        correctAnswers++;
        score += 10;
    } else {
        wrongAnswers++;
    }
    
    // Mostrar feedback visual
    document.querySelectorAll('.option').forEach((option, index) => {
        option.style.pointerEvents = 'none';
        if (index === questionData.correct) {
            option.classList.add('correct');
        } else if (index === selectedAnswer && !isCorrect) {
            option.classList.add('incorrect');
        }
    });
    
    // Mostrar feedback textual
    showFeedback(isCorrect, questionData.explanation);
    
    // Atualizar pontuação
    updateScore();
}

// Mostrar feedback
function showFeedback(isCorrect, explanation) {
    feedbackContainer.innerHTML = `
        <div class="feedback-content">
            <div class="feedback-icon">${isCorrect ? '✅' : '❌'}</div>
            <div class="feedback-text">
                <strong>${isCorrect ? 'Correto!' : 'Incorreto!'}</strong><br>
                ${explanation}
            </div>
        </div>
    `;
    
    feedbackContainer.className = `feedback-container ${isCorrect ? 'feedback-correct' : 'feedback-incorrect'} show`;
    
    // Adicionar animação
    feedbackContainer.classList.add('fade-in-up');
}

// Próxima pergunta
function nextQuestion() {
    if (selectedAnswer === null) return;
    
    checkAnswer();
    
    setTimeout(() => {
        currentQuestion++;
        
        if (currentQuestion < questions.length) {
            showQuestion();
            updateProgress();
        } else {
            showResults();
        }
    }, 2000);
}

// Atualizar progresso
function updateProgress() {
    const progress = ((currentQuestion + 1) / questions.length) * 100;
    progressFill.style.width = `${progress}%`;
    progressText.textContent = `${currentQuestion + 1} / ${questions.length}`;
}

// Atualizar pontuação
function updateScore() {
    scoreElement.textContent = score;
    correctElement.textContent = correctAnswers;
}

// Mostrar resultados
function showResults() {
    const percentage = Math.round((correctAnswers / questions.length) * 100);
    
    finalScoreElement.textContent = `${correctAnswers} / ${questions.length}`;
    finalCorrectElement.textContent = correctAnswers;
    finalWrongElement.textContent = wrongAnswers;
    finalPointsElement.textContent = score;
    
    // Mensagem personalizada baseada na performance
    let message = '';
    if (percentage >= 90) {
        message = '🎉 Excelente! Seu código é saudável como uma dieta equilibrada! Você domina tanto a saúde quanto a programação!';
    } else if (percentage >= 70) {
        message = '👍 Muito bom! Você está no caminho certo para um desenvolvimento saudável! Continue assim!';
    } else if (percentage >= 50) {
        message = '⚠️ Cuidado! Seu projeto está precisando de alguns ajustes na "dieta digital". Estude mais sobre boas práticas!';
    } else {
        message = '🚨 Atenção! Seu projeto está cheio de "junk food digital"! É hora de revisar os conceitos de programação saudável!';
    }
    
    resultMessageElement.textContent = message;
    
    // Mostrar resultado com animação
    resultContainer.style.display = 'flex';
    resultContainer.classList.add('fade-in-up');
}

// Reiniciar quiz
function restartQuiz() {
    resultContainer.style.display = 'none';
    resultContainer.classList.remove('fade-in-up');
    init();
}

// Event listeners
nextBtn.addEventListener('click', nextQuestion);
restartBtn.addEventListener('click', restartQuiz);

// Efeitos sonoros (opcional)
function playSound(type) {
    // Criar um som simples usando Web Audio API
    const audioContext = new (window.AudioContext || window.webkitAudioContext)();
    const oscillator = audioContext.createOscillator();
    const gainNode = audioContext.createGain();
    
    oscillator.connect(gainNode);
    gainNode.connect(audioContext.destination);
    
    if (type === 'correct') {
        oscillator.frequency.setValueAtTime(800, audioContext.currentTime);
        oscillator.frequency.setValueAtTime(1000, audioContext.currentTime + 0.1);
    } else if (type === 'incorrect') {
        oscillator.frequency.setValueAtTime(400, audioContext.currentTime);
        oscillator.frequency.setValueAtTime(200, audioContext.currentTime + 0.1);
    } else if (type === 'click') {
        oscillator.frequency.setValueAtTime(600, audioContext.currentTime);
    }
    
    gainNode.gain.setValueAtTime(0.1, audioContext.currentTime);
    gainNode.gain.exponentialRampToValueAtTime(0.01, audioContext.currentTime + 0.2);
    
    oscillator.start(audioContext.currentTime);
    oscillator.stop(audioContext.currentTime + 0.2);
}

// Adicionar sons aos eventos
document.addEventListener('click', (e) => {
    if (e.target.classList.contains('option') || e.target.closest('.option')) {
        playSound('click');
    }
});

// Inicializar quando a página carregar
document.addEventListener('DOMContentLoaded', init);

// Adicionar teclas de atalho
document.addEventListener('keydown', (e) => {
    if (e.key >= '1' && e.key <= '4' && selectedAnswer === null) {
        const answerIndex = parseInt(e.key) - 1;
        if (answerIndex >= 0 && answerIndex < 4) {
            selectAnswer(answerIndex);
        }
    } else if (e.key === 'Enter' && !nextBtn.disabled) {
        nextQuestion();
    } else if (e.key === 'r' && resultContainer.style.display === 'flex') {
        restartQuiz();
    }
});

// Prevenir seleção de texto em elementos interativos
document.addEventListener('selectstart', (e) => {
    if (e.target.classList.contains('option')) {
        e.preventDefault();
    }
});