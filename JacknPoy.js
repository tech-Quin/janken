const choices = ["rock",  "scissor", "paper"];

const playerDisplay = document.getElementById("playerDisplay");
const computerDisplay = document.getElementById("computerDisplay");
const resultDisplay = document.getElementById("resultDisplay");
const playerscoreDisplay = document.getElementById("playerScore");
const computerscoreDisplay = document.getElementById("computerScore");
const ahead = document.getElementById("ahead");
let playerScore = 0;
let computerScore = 0;

function playGame(playerChoice){

    const computerChoice = choices[Math.floor(Math.random()*3)];

    console.log(playerChoice);
    
    let result = "";

    if(playerChoice === computerChoice){
        result = "IT'S A TIE!";
    }

    else{
        switch(playerChoice){
            case "rock" :
            result = (computerChoice === `scissor`) ? "YOU WIN!" : "YOU LOSE!";
            break

            case "scissor" :
            result = (computerChoice === `paper`) ? "YOU WIN!" : "YOU LOSE!";
            break

            case "paper" :
            result = (computerChoice === `rock`) ? "YOU WIN!" : "YOU LOSE!";
            break
        }

    }

    playerDisplay.textContent = `PLAYER:  ${playerChoice}`;
    computerDisplay.textContent = `COMPUTER:  ${computerChoice}`;
    resultDisplay.textContent = result;

    resultDisplay.classList.remove("redtext", "greentext");

    
    switch(result){
        case "YOU LOSE!":
            computerScore++;
            resultDisplay.classList.add("redtext");
            break

        case "YOU WIN!":
            playerScore++;
            resultDisplay.classList.add("greentext");

            break
    
}
    playerscoreDisplay.textContent = playerScore;
    computerscoreDisplay.textContent = computerScore;

    if(playerScore > computerScore){
        ahead.textContent = "PLAYER'S AHEAD";
    }
    
    else{
        ahead.textContent = "COMPUTER'S AHEAD";

    }
}



