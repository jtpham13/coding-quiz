var startQuiz = document.querySelector("#start")
var startPage = document.querySelector("#quiz-page")
var quizQuestions = document.querySelector("#quiz-questions")
var answerChoicesList = document.querySelector("#answer-choices")
var quizContainer= document.getElementById("quiz-container")
var index = 0

startQuiz.addEventListener('click', beginQuiz) 

function beginQuiz (){
    console.log("Quiz started")
   startPage.style.display = "none"
   showQuestions(index)
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
 
function showQuestions(index){
    
       
        quizQuestions.innerHTML = questions[index].questionText
        var answerChoicesArr = questions[index].answerChoices
        answerChoicesArr.forEach((answer, index)=>{
            var answerListTag = document.createElement('li');
            answerListTag.innerHTML = answer
            console.log(answerListTag)
            answerChoicesList.appendChild(answerListTag)
        })
        var nextBtn= document.createElement("button")
        nextBtn.innerHTML="next"
        nextBtn.addEventListener('click', function(){
                console.log('next btn clicked')
            
            })
            quizContainer.append(nextBtn)

    
   
// quizQuestions.textContent = questions[0].questionText



// var answerChoicesArray= questions[0].answerChoices

// answerChoicesList= answerChoicesArray.forEach(function(answer,index){
// console.log(answer)


// var answerListTag=document.createElement("li")
 


// answerListTag.innerHTML=`${index+1}. ${answer}`
// console.log(answerListTag)

// answerListTag.classList.add("liststyle")

// answerChoicesList.appendChild(answerListTag)

// })

// var nextBtn= document.createElement("button")
// console.log(nextBtn)
// nextBtn.innerHTML="next"
// console.log(quizContainer)
// nextBtn.addEventListener('click', function(){
//     console.log('next btn clicked')

// })
// quizContainer.append(nextBtn)

}
   


