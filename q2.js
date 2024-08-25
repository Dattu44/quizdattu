
let highScore = 0;
const quizData = [
    {
        question: " Which of the following is a JavaScript framework?",
        options: ["React", "Django", "Laravel", "Flask"],
        ans: 1
    },
    {
        question: " What does '===' mean in JavaScript?",
        options: ["Assignment", "Equality", "Strict equality", "Inequality"],
        ans: 3
    },
    {
        question: " Which of the following is not a JavaScript data type?",
        options: ["String", "Boolean", "Float", "Undefined"],
        ans: 3
    },
    {
        question: " How can you create a function in JavaScript?",
        options: ["function = myFunction()", "function myFunction()", "create myFunction()", "def myFunction()"],
        ans: 2
    },
    {
        question: " Which method is used to convert a JSON string into a JavaScript object?",
        options: ["JSON.stringify()", "JSON.parse()", "JSON.object()", "JSON.convert()"],
        ans: 2
    },
    {
        question: " What will 'typeof []' return in JavaScript?",
        options: ["object", "array", "undefined", "null"],
        ans: 1
    },
    {
        question: " Which company developed JavaScript?",
        options: ["Microsoft", "Netscape", "Sun Microsystems", "IBM"],
        ans: 2
    },
    {
        question: " How do you add a comment in JavaScript?",
        options: ["/ comment", "// Comment", "# Comment", "/* Comment */"],
        ans: 2
    },
    {
        question: " Which of the following is the correct way to declare a variable in JavaScript?",
        options: ["var myVar;", "variable myVar;", "myVar = var;", "declare myVar;"],
        ans: 1
    },
    {
        question: " What is the result of '2 + '2' in JavaScript?",
        options: ["22", "4", "NaN", "Error"],
        ans: 1
    }
];


// Fisher-Yates (Knuth) Shuffle to randomize the questions
function shuffle(array) {
    for (let i = array.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [array[i], array[j]] = [array[j], array[i]]; // Swap elements
    }
    return array;
}

// Randomize the quizData before displaying
let randomizedQuizData = shuffle([...quizData]);

function renderQuiz() {
    randomizedQuizData = shuffle([...quizData]);

    const bodyDiv = document.getElementById("body");
    bodyDiv.innerHTML = ""; // Clear existing content

    randomizedQuizData.forEach((quiz, index) => {
        const questionDiv = document.createElement("div");
        questionDiv.className = "m-div";
        questionDiv.id = `m-div${index + 1}`;

        const questionHTML = `<div class="ques"><h3 class="qus">${(index+1)+"." + quiz.question}</h3></div>`;
        questionDiv.innerHTML = questionHTML;

        quiz.options.forEach((option, optIndex) => {
            const optionHTML = `
                <div class="opt" id="inp${index + 1}${optIndex + 1}">
                    <label>
                        <input id="in${index + 1}${optIndex + 1}" type="radio" name="n${index + 1}">
                        ${option}
                    </label>
                </div>`;
            questionDiv.innerHTML += optionHTML;
        });

        bodyDiv.appendChild(questionDiv);
/*         if (index < quizData.length - 1) {
            bodyDiv.innerHTML += "<hr>";
        } */
    });
}

window.onload = renderQuiz;


function validate(){

    let answers = new Array(quizData.length).fill(0);

    for(j=1;j<=quizData.length;j++){
        for(i=1;i<=4;i++){
            ele = document.getElementById(`in${j}${i}`)
            if(ele.checked == true){
                answers[j-1] = (i)
            }
        }
    }

    let result = 0
    for(i=0;i<quizData.length;i++){
        if(randomizedQuizData[i].ans == answers[i]){
            result++;
        }
      // alert(quizData[i].ans)
    }
    if(highScore<result){
        highScore = result;
    }
    pauseTimer() 
    showResults(result,highScore)
}


let time = 60; // Set initial time in seconds (e.g., 1 minute = 60 seconds)
let timerInterval;

function formatTime(seconds) {
    const minutes = Math.floor(seconds / 60);
    const remainingSeconds = seconds % 60;
    return `${minutes < 10 ? '0' : ''}${minutes}:${remainingSeconds < 10 ? '0' : ''}${remainingSeconds}`;
}

function startTimer() {
    // document.getElementById('timer')
    if (!timerInterval) { // Prevent multiple intervals from starting
        timerInterval = setInterval(() => {
            if (time <= 0) {
                clearInterval(timerInterval);
                timerInterval = null; // Reset the interval variable
                document.getElementById('timer').textContent = "00:00";
                alert("Time's up!");
                validate()
            } else {
                time--;
                document.getElementById('timer').textContent = `Time : ${formatTime(time)}`;
            }
        }, 1000);
    }
}

function pauseTimer() {
    clearInterval(timerInterval);
    timerInterval = null; // Reset the interval variable
}

function resetTimer() {
    clearInterval(timerInterval);
    timerInterval = null; // Reset the interval variable
    time = 60; // Reset time to initial value
    document.getElementById('timer').textContent = `Time : ${formatTime(time)}`;
}

function showResults(result,highScore){
    //alert('show results')
    let body = document.getElementById('body');
    let btn = document.getElementById('btn');
    let startbtn = document.getElementById('startbtn');
    let results = document.getElementById('results');




    body.style.display = 'none'
    btn.style.display = 'none'
    startbtn.style.display = 'none'
    results.style.display = 'block'

    document.getElementById('yourScore').innerHTML = `Your Score : ${result*10}%`
    document.getElementById('highestScore').innerHTML = `High Score : ${highScore*10}%`



}






function start(){

    resetTimer()

    let body = document.getElementById('body');
    let sdiv = document.getElementById('sdiv');
    let btn = document.getElementById('btn');
    let header = document.getElementById('header');
    let results = document.getElementById('results');
    
    
    sdiv.style.display = 'none'
    results.style.display = 'none'
    body.style.display = 'block'
    btn.style.display = 'block'
    header.style.display = 'flex'
    
   
    renderQuiz()
    
   startTimer()
}


