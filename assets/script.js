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
        questionText: "Which of the following is a array?", 
        answerChoices: ['Answer1', 'Answer2', 'Answer3', 'Answer4'],
        correctAnswer: 'Answer2'
    },

    {
        

    }
]
 
function showQuestions(){
    console.log(questions[0].questionText)
quizQuestions.textContent = questions[0].questionText
}
   


