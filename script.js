// to add - 3 btns question, answer, new Q
const startButton = document.getElementById('start-btn')
const questionContainerElement = document.getElementById('question-container')
const questionElement = document.getElementById('question')
const answerButtonsElement = document.getElementById('answer-buttons')

let shuffledQuestions, currentQuestionIndex


startButton.addEventListener('click', startGame)

// prevents instance where no question from appearing when game shows next
function startGame() {
    console.log('started...')
    startButton.classList.add('hide')
    shuffledQuestions = questions.sort(() => Math.random() - .5)
    currentQuestionIndex = 0
    questionContainerElement.classList.remove('hide')
    setNextQuestion()
}

function setNextQuestion() {
    showQuestion(shuffledQuestions[currentQuestionIndex])

}

function showQuestion(question) {
    questionElement.innerText = question.question
    question.answers.forEach(answer => {
        const button = document.createElement('button')
        button.innerText = answer,text
        button.classList.add('btn')
        if (answer.correct) {
            button.dataset.correct = answer.correct 
        }
        button.addEventListener('click', selectAnswer)
        answerButtonsElement.appendChild(button)
    })
    
}


function selectAnswer(e) {

}

// add questions in here, once we have 10, set shuffledQuestions = questions.sort(() => Math.random() - .5)

    currentQuestionIndex = 0
const questions =  [
    {
        question: 'What is 2+2', 
        answers: [
            { text: '4', correct: true},
            { text: '22', correct: false},
        ]
    }
]