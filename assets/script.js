var startQuiz = document.querySelector("#start")
var startPage = document.querySelector("#quiz-page")
var quizQuestions = document.querySelector("#quiz-questions")
var answerChoicesList = document.querySelector("#answer-choices")
var quizContainer= document.getElementById("quiz-container")
var isCorrect = document.getElementById('isCorrect')
var buttonContainer = document.querySelector("#button-container")

// Quiz Questions
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
        questionText: "Which of the following are Javascript data types?",
        answerChoices: ['apples', 'number', 'boolean' ,'pizza'],
        correctAnswer: 'boolean'

    },
    {
        questionText: "Which of these are NOT looping structures in Javascript?",
        answerChoices: ['for', 'while', 'do-while' ,'loopy loop'],
        correctAnswer: 'loopy loop'

    },
]



let currentQuestion = 0

// Landing page to start quiz
startQuiz.addEventListener('click', beginQuiz) 

function beginQuiz (){
    console.log("Quiz started")
   startPage.style.display = "none"
showQuestions()
}


 
function showQuestions(){
    
 

// displaying questions for quiz  
buttonContainer.innerHTML = ""
answerChoicesList.innerHTML = ""
quizQuestions.textContent = questions[currentQuestion].questionText



var answerChoicesArray= questions[currentQuestion].answerChoices

answerChoicesArray.forEach(function(answer){
console.log(answer)


var answerListTag=document.createElement("li")
 
var answerButton=document.createElement("button")


answerButton.textContent= answer
console.log(answerListTag)
answerListTag.append(answerButton)
answerListTag.classList.add("liststyle")
answerButton.addEventListener('click', (event)=>{
    var userAnswer = event.target.innerHTML
    if(userAnswer === questions[currentQuestion].correctAnswer){
        console.log('correct')
        isCorrect.innerHTML = "Correct"
    } else{
        isCorrect.innerHTML = 'Incorrect'
    }
})

answerChoicesList.appendChild(answerListTag)



}) 

var nextBtn= document.createElement("button")
console.log(nextBtn)
nextBtn.innerHTML="next"
console.log(buttonContainer)
nextBtn.addEventListener('click', function(){
    checkAnswer();

})
buttonContainer.append(nextBtn)

};


function checkAnswer(){
    console.log('clicked')
    currentQuestion++
    if(currentQuestion===questions.length){
    //  call end quiz 
    }
    showQuestions()
}









   


