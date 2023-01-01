const QuestionsData = [
    {
        question: "What is React JS?",
        choice: ["Programming Language", "Framework", "Library", "Protocol"],
        correctAnswer: 2,
    },

    {
        question: "What is full form of MS Dhoni?",
        choice: [
            "Mahender Singh Dhoni",
            "Manoj Singh Dhoni",
            "Milkha Singh Dhoni",
            "Maheder Singh Dhiman",
        ],
        correctAnswer: 0,
    },

    {
        question: "Who is Prime Minister of India?",
        choice: ["Sushant", "Narendra Modi", "Rahul Gandhi", "John Cena"],
        correctAnswer: 1,
    },

    {
        question: "What is full form of TS according to programming?",
        choice: ["TypeScript", "Translate", "Transplant", "Transistor"],
        correctAnswer: 0,
    },
];

let ID = 0

const questionTag = document.getElementById("question")

const optionOne = document.getElementById("0")
const optionTwo = document.getElementById("1")
const optionThree = document.getElementById("2")
const optionFour = document.getElementById("3")
const scoreTextElement = document.getElementById("score")

let correctAnswer;

function setQuestion(ID) {
    questionTag.innerText = QuestionsData[ID].question

    optionOne.innerText = QuestionsData[ID].choice[0]
    optionTwo.innerText = QuestionsData[ID].choice[1]
    optionThree.innerText = QuestionsData[ID].choice[2]
    optionFour.innerText = QuestionsData[ID].choice[3]

    correctAnswer = QuestionsData[ID].correctAnswer

}

setQuestion(ID)

let selectedAnswer
let selectedAnswerID
let isAnswerSelected = false
let score = 0


optionOne.addEventListener("click", () => {
    if(isAnswerSelected === false){
        optionOne.style.backgroundColor = "grey"
        optionOne.style.color = "white"
        selectedAnswer = optionOne
        selectedAnswerID = optionOne.id
        isAnswerSelected = true
    }
});

optionTwo.addEventListener("click", () => {
    if(isAnswerSelected === false){
        optionTwo.style.backgroundColor = "grey"
        optionTwo.style.color = "white"
        selectedAnswer = optionTwo
        selectedAnswerID = optionTwo.id
        isAnswerSelected = true
    }
});

optionThree.addEventListener("click", () => {
    if(isAnswerSelected === false){
        optionThree.style.backgroundColor = "grey"
        optionThree.style.color = "white"
        selectedAnswer = optionThree
        selectedAnswerID = optionThree.id
        isAnswerSelected = true
    }
});

optionFour.addEventListener("click", () => {
    if(isAnswerSelected === false){
        optionFour.style.backgroundColor = "grey"
        optionFour.style.color = "white"
        selectedAnswer = optionFour
        selectedAnswerID = optionFour.id
        isAnswerSelected = true
    }
});


function checkAnswer(){
    if(selectedAnswerID == correctAnswer){
        selectedAnswer.style.backgroundColor = "green"
        score++
        scoreTextElement.innerText = score
        setTimeout(nextQuestion, 2000)
    } else {
        selectedAnswer.style.backgroundColor = "red"
        setTimeout(nextQuestion, 2000)
    }
}

document.getElementById('nextQuestionButton').addEventListener('click', checkAnswer)

function nextQuestion(){
    ID = ID + 1
    isAnswerSelected = false
    setQuestion(ID)
    optionOne.style.backgroundColor = "white"
    optionTwo.style.backgroundColor = "white"
    optionThree.style.backgroundColor = "white"
    optionFour.style.backgroundColor = "white"


    optionOne.style.color = "black"
    optionTwo.style.color = "black"
    optionThree.style.color = "black"
    optionFour.style.color = "black"

}