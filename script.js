var element = document.getElementById("container");
const startButton = document.getElementById('start-btn')
console.log(startButton)
startButton.addEventListener('click', startGame)
var btnContainer = document.querySelector(".btn-grid")
var index = 0
const startingMinutes = 10 ;
let time = startingMinutes * 60;
const countdownEl = document.getElementById('countdown');
var myTimer;



function updatecountdown(){
    const minutes = Math.floor(time / 60);
    let seconds = time % 60;
    
    seconds = seconds < 10 ? '0' + seconds : seconds;

    countdownEl.innerHTML = `${minutes}:${seconds}`;
    time--;
    if (time <1) {
        clearInterval(myTimer);
        countdownEl.innerHTML = 0
    }
}


function startGame() {
    myTimer = setInterval(updatecountdown, 1000);

   
    console.log(element)
    element.classList.remove("hide");
    console.log('started')

    var startbtn = document.getElementById("start-btn")
    startbtn.classList.add("hide");
    showQuestion(index)

}
var questions = [{
    question: 'Q1 what is 1+1',
    choices: { cho1: 'square', cho2: '2', cho3: 'squirel', cho4: '21' },
    answer: '2'
}, {
    question: 'Q2 What dose CSS stand for ?',
    choices: { cho1: 'Casading Style Sheets', cho2: 'Custom Style Sheet', cho3: 'Change Style Sheet', cho4: 'Convert Style Sheet' },
    answer: 'Casading Style Sheets'
}, {
    question: 'Q3 What dose HTML stand for ?',
    choices: { cho1: 'Hyper Text Markup Language', cho2: 'How To Make Linguine', cho3: 'Hour Time Management Level', cho4: 'Hyper Text Manuel Language' },
    answer: 'Hyper Text Markup Language'
}, {
    question: 'Q4 What is the command to copy from Git hub',
    choices: { cho1: 'Git copy', cho2: 'Git control', cho3: 'Git clone', cho4: ' Git clonee' },
    answer: 'Git clone'
}, {
    question: 'Q5 what is the syntax for "id" in CSS',
    choices: { cho1: '#', cho2: '%', cho3: '+', cho4: '=' },
    answer: '#'
},]
console.log(questions[4].question)
function showQuestion(index) {
    //stop the code from going passs the questions
    
var question = document.getElementById('Question')
var cho1 = document.getElementById('cho1')
var cho2 = document.getElementById('cho2')
var cho3 = document.getElementById('cho3')
var cho4 = document.getElementById('cho4')
question.textContent = questions[index].question
cho1.textContent = questions[index].choices.cho1
cho2.textContent = questions[index].choices.cho2
cho3.textContent = questions[index].choices.cho3
cho4.textContent = questions[index].choices.cho4
}
// We are going to need questions and answers
// for = we are starting some loop
// let i =0 = the variable we are looping over 
// i< questions.length = condition to the loop
// i++ = after code was ran, increase i by one
for (let i = 0; i < questions.length; i++) {
    console.log(questions[i].question)
    
}

console.log(questions[0].choices.cho3)

function setNextQuestion() {

}

btnContainer.addEventListener('click', function(event) {
    var element = event.target 

    if (element.matches('.btn')) {
        console.log(element.textContent)
        if (element.textContent == questions[index].answer){
            index++
            // if index number is equal to the length of the question array
            // end quiz
            if (index === questions.length){
                quizend()
                clearInterval(myTimer)
            }else{ 
                showQuestion(index)
                console.log('right answer')

          }
          
            //else continue
           
            
        }
        else {
            // take the count variable and minus whatever number 
             time = time - 30
            console.log('wrong answer')
        }
    }
})

function selectAnswer() {
if (userInput === questions[0].answer) {
    console.log('correct')
}else{
    console.log('wrong')
}
}
function quizend(){
    // remove question section
    element.classList.add("hide")
    var myScore = time
    countdownEl.innerHTML = ` Your Score is ${myScore}`
    localStorage.getItem(myScore);
}
