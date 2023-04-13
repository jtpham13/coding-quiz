var startQuiz = document.querySelector("#start")
var startPage = document.querySelector("#quiz-page")
var quizQuestions = document.querySelector("#quiz-questions")
var answerChoicesList = document.querySelector("#answer-choices")
var quizContainer= document.getElementById("quiz-container")
var isCorrect = document.getElementById('isCorrect')

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
        questionText: "Inside which html element does javascript go?",
        answerChoices: ['<javascript>', '<js>', '<script>','<scripture>'],
        correctAnswer: '<script>'

    }
]

// Landing page to start quiz
startQuiz.addEventListener('click', beginQuiz) 

function beginQuiz (){
    console.log("Quiz started")
   startPage.style.display = "none"
showQuestions()
}


 
function showQuestions(){
    
 
// displaying question 1   
quizQuestions.textContent = questions[0].questionText



var answerChoicesArray= questions[0].answerChoices

answerChoicesArray.forEach(function(answer){
console.log(answer)


var answerListTag=document.createElement("li")
 


answerListTag.innerHTML=answer
console.log(answerListTag)

answerListTag.classList.add("liststyle")
answerListTag.addEventListener('click', (event)=>{
    var userAnswer = event.target.innerHTML
    if(userAnswer === questions[0].correctAnswer){
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
console.log(quizContainer)
nextBtn.addEventListener('click', function(){
    showQuestion2();

})
quizContainer.append(nextBtn)

};


function checkAnswer(){
    console.log('clicked')
}








function showQuestion2() {

    quizQuestions.textContent = questions[1].questnsionText



    var answerChoicesArray= questions[1].answerChoices
    
    answerChoicesArray.forEach(function(answer,index){
    console.log(answer)
    
    
    var answerListTag=document.createElement("li")
     
    
    
    answerListTag.innerHTML=`${index+1}. ${answer}`
    console.log(answerListTag)
    
    answerListTag.classList.add("liststyle")

   
    
    answerChoicesList.appendChild(answerListTag)
    
    })
    
    var nextBtn= document.createElement("button")
    console.log(nextBtn)
    nextBtn.innerHTML="next"
    console.log(quizContainer)
    nextBtn.addEventListener('click', function(){
        console.log('next')
    
    })
    quizContainer.append(nextBtn)

}

   


