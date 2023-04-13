var startQuiz = document.querySelector("#start")
var startPage = document.querySelector("#quiz-page")
var quizQuestions = document.querySelector("#quiz-questions")
var answerChoicesList = document.querySelector("#answer-choices")

startQuiz.addEventListener('click', beginQuiz) 

function beginQuiz (){
    console.log("Quiz started")
   startPage.style.display = "none"
   showQuestions()
}

var questions = [
    {
        questionText: "Which of the following characters surround an array?", 
        answerChoices: ['{}', '[]', '()', '<>'],
        correctAnswer: '[]'
    },

    {
        questionText: "Inside which html element does javascript go?",
        answerChoices: ['<javascript>', '<js>', '<script>','<scripture>'],
        correctAnswer: '<script>'
        

    },
    {
        questionText: "Inside which html element does javascript go?",
        answerChoices: ['<javascript>', '<js>', '<script>','<scripture>'],
        correctAnswer: '<script>'

    }
]
 
function showQuestions(){
    console.log(questions[0].questionText)
quizQuestions.textContent = questions[0].questionText
}
   


