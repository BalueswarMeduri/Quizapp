const questions = [
    {
        question: "What is the time complexity to search for an element in a balanced binary search tree (BST)?",
        answers: [
            { text: "O(n)" , correct: false },
            { text: "O(log n)" , correct: true },
            { text: "O(n log n)" , correct: false },
            { text: "O(1)" , correct: false },
        ]
    },
    {
        question: "Which data structure is best suited for implementing a priority queue?",
        answers: [
            { text: "Array" , correct: false },
            { text: "Linked List" , correct: false },
            { text: "Stack" , correct: false },
            { text: "Heap" , correct: true },
        ]
    },
    {
        question: "In a graph, what is a 'cycle'?",
        answers: [
            { text: "A path that starts and ends at different vertices" , correct: false },
            { text: "A path that visits every vertex exactly once" , correct: false },
            { text: "A path that starts and ends at the same vertex" , correct: true },
            { text: "A path that visits every edge exactly once" , correct: false },
        ]
    },
    {
        question: "What is the worst-case time complexity for inserting an element into a hash table using separate chaining for collision resolution?",
        answers: [
            { text: "O(1)" , correct: false },
            { text: "O(log n)" , correct: false },
            { text: "O(n)" , correct: true },
            { text: "O(n^2)" , correct: false },
        ]
    },
    {
        question: "What is the space complexity of a linked list with n elements?",
        answers: [
            { text: "O(1)" , correct: false },
            { text: "O(log n)" , correct: false },
            { text: "O(n)" , correct: true },
            { text: "O(n^2)" , correct: false },
        ]
    },
    {
        question: "In a binary tree, how many children can a node have at most?",
        answers: [
            { text: "1" , correct: false },
            { text: "2" , correct: true },
            { text: "3" , correct: false },
            { text: "4" , correct: false },
        ]
    },
    {
        question: "Which traversal technique in binary trees visits the nodes in the following order: left subtree, root, right subtree?",
        answers: [
            { text: "Preorder" , correct: false },
            { text: "Inorder" , correct: true },
            { text: "Postorder" , correct: false },
            { text: "Level-order" , correct: false },
        ]
    },
    {
        question: "What is the best time complexity for searching an element in an unordered array?",
        answers: [
            { text: "O(1)" , correct: false },
            { text: "O(log n)" , correct: false },
            { text: "O(n)" , correct: true },
            { text: "O(n log n)" , correct: false },
        ]
    },
    {
        question: "Which data structure is used in breadth-first search (BFS) of a graph?",
        answers: [
            { text: "Stack" , correct: false },
            { text: "Queue" , correct: true },
            { text: "Priority Queue" , correct: false },
            { text: "Linked List" , correct: false },
        ]
    },
    {
        question: "What is the average-case time complexity of the quicksort algorithm?",
        answers: [
            { text: "O(n)" , correct: false },
            { text: "O(n log n)" , correct: true },
            { text: "O(n^2)" , correct: false },
            { text: "O(log n)" , correct: false },
        ]
    }
];

const questionEl = document.getElementById("question");
const answerButtons = document.getElementById("answer");
const nextButton = document.getElementById("next");

let currentQuestionIndex = 0;
let score = 0;

function startQuiz() {
    currentQuestionIndex = 0;
    score = 0;
    nextButton.innerHTML = "Next";
    showQuestion();
}

function showQuestion() {
    resetState();
    let currentQuestion = questions[currentQuestionIndex];
    let questionNumber = currentQuestionIndex + 1;
    questionEl.innerHTML = questionNumber + ". " + currentQuestion.question;

    currentQuestion.answers.forEach(answer => {
        const button = document.createElement("button");
        button.innerHTML = answer.text;
        button.classList.add("btn");
        if (answer.correct) {
            button.dataset.correct = answer.correct;
        }
        button.addEventListener("click", selectAnswer);
        answerButtons.appendChild(button);
    });
}

function resetState() {
    nextButton.style.display = "none";
    while (answerButtons.firstChild) {
        answerButtons.removeChild(answerButtons.firstChild);
    }
}

function selectAnswer(e) {
    const selectedButton = e.target;
    const isCorrect = selectedButton.dataset.correct === "true";
    if (isCorrect) {
        selectedButton.classList.add("correct");
        score++;
    } else {
        selectedButton.classList.add("wrong");
    }
    Array.from(answerButtons.children).forEach(button => {
        if (button.dataset.correct === "true") {
            button.classList.add("correct");
        }
        button.disabled = true;
    });
    nextButton.style.display = "block";
}

function showScore() {
    resetState();
    questionEl.innerHTML = `You scored ${score} out of ${questions.length}!`;
    nextButton.innerHTML = "Play Again";
    nextButton.style.display = "block";
}

function handleNextButton() {
    currentQuestionIndex++;
    if (currentQuestionIndex < questions.length) {
        showQuestion();
    } else {
        showScore();
    }
}

nextButton.addEventListener("click", () => {
    if (currentQuestionIndex < questions.length) {
        handleNextButton();
    } else {
        startQuiz();
    }
});

startQuiz();
