let rock = document.querySelector("#rock");
let paper = document.querySelector("#paper");
let scissor = document.querySelector("#scissor");

let youScore = document.querySelector("#you h3");
let compScore = document.querySelector("#comp h3");
let winnerBox = document.querySelector("#winningText");
let winnerText = document.querySelector("#winnerText");
let restart=document.querySelector("#restart");

let choices = ["rock", "paper", "scissor"];

let userChoice = "";

let userscore = 0;
let compscore = 0;

//Restart Function

const RestartGame = () => {
    userChoice = "";
    userscore = 0;
    compscore = 0;
    youScore.innerText = 0;
    compScore.innerText = 0;
    winnerText.innerText = "Game Restarted! 🔄";
    winnerText.style.color = "#f1f5f9";
    winnerBox.style.backgroundColor = "#1e293b";
    winnerBox.style.boxShadow = "0 6px 18px rgba(0, 0, 0, 0.35)";
};

// Game Function
const showWinner = () => {

    // Computer chooses randomly every round
    let computerChoice = Math.floor(Math.random() * 3);
    let compChoice = choices[computerChoice];

    // You Win
    if (
        (userChoice === "rock" && compChoice === "scissor") ||
        (userChoice === "paper" && compChoice === "rock") ||
        (userChoice === "scissor" && compChoice === "paper")
    ) {

        userscore = userscore + 1;
        youScore.innerText = userscore;
        winnerText.style.color = "#4ade80";
        winnerBox.style.width = "400px";
        winnerBox.style.boxShadow = "0 0 25px rgba(74, 222, 128, 0.4)";

        // Rock beats Scissor
        if (userChoice === "rock" && compChoice === "scissor") {
            winnerText.innerText = "You win! Rock beats Scissor 🪨🎉";

        }
        // Paper beats Rock
        else if (userChoice === "paper" && compChoice === "rock") {
            winnerText.innerText = "You win! Paper beats Rock 📄🎉";

        }
        // Scissor beats Paper
        else if (userChoice === "scissor" && compChoice === "paper") {
            winnerText.innerText = "You win! Scissor beats Paper ✂️🎉";

        }
    }

    // Computer Wins
    else if (
        (userChoice === "rock" && compChoice === "paper") ||
        (userChoice === "paper" && compChoice === "scissor") ||
        (userChoice === "scissor" && compChoice === "rock")
    ) {

        compscore = compscore + 1;
        compScore.innerText = compscore;

        winnerText.style.color = "#f40909";
        winnerBox.style.width = "400px";
        winnerBox.style.boxShadow = "0 0 25px rgba(227, 17, 17, 0.4)";

        // Paper beats Rock
        if (userChoice === "rock" && compChoice === "paper") {
            winnerText.innerText = "You lost! Paper beats Rock 😭📄";

        }

        // Scissor beats Paper
        else if (userChoice === "paper" && compChoice === "scissor") {
            winnerText.innerText = "You lost! Scissor beats Paper 😭✂️";
        }
        // Rock beats Scissor
        else if (userChoice === "scissor" && compChoice === "rock") {
            winnerText.innerText = "You lost! Rock beats Scissor 😭🪨";
        }
    }

    // Draw
    else {
        winnerText.style.color = "#facc15";
        winnerBox.style.boxShadow = "0 0 25px rgba(227, 197, 76, 0.4)";
        winnerBox.style.width = "400px";

        // Rock vs Rock
        if (userChoice === "rock" && compChoice === "rock") {
            winnerText.innerText = "It's a Draw! Both choose Rock 🪨🤝";
        }

        // Paper vs Paper
        else if (userChoice === "paper" && compChoice === "paper") {
            winnerText.innerText = "It's a Draw! Both choose Paper 📄🤝";
        }

        // Scissor vs Scissor
        else if (userChoice === "scissor" && compChoice === "scissor") {
            winnerText.innerText = "It's a Draw! Both choose Scissor ✂️🤝";
        }
    }
};

// Rock Click
rock.addEventListener("click", () => {
    userChoice = "rock";
    showWinner();
});

// Paper Click
paper.addEventListener("click", () => {
    userChoice = "paper";
    showWinner();
});

// Scissor Click
scissor.addEventListener("click", () => {
    userChoice = "scissor";
    showWinner();
});

//Restart Button
restart.addEventListener("click",()=>{
    RestartGame();
})