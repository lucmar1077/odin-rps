function getComputerChoice() {
    let computerChoice = Math.floor(Math.random() * 3);
    switch (computerChoice) {
        case 0:
            computerChoice = "rock";
            break;
        case 1:
            computerChoice = "paper";
            break;
        case 2: 
            computerChoice = "scissors"
            break;   
    }
    return computerChoice;
}

function getHumanChoice() {
    let humanChoice = prompt("Choose: Rock | Paper | Scissors");
    return humanChoice.toLowerCase();
}

let humanScore = 0;
let computerScore = 0;

function playRound(humanChoice, computerChoice) {
    if (humanChoice === computerChoice) {
        console.log("Tie!");
    }
    else if (humanChoice === "rock" && computerChoice === "scissors") {
        console.log(`You win, ${humanChoice} beats ${computerChoice}!`);
        humanScore++;
    }
    else if (humanChoice === "scissors" && computerChoice === "paper") {
        console.log(`You win, ${humanChoice} beats ${computerChoice}!`);
        humanScore++;
    }
    else if (humanChoice === "paper" && computerChoice === "rock") {
        console.log(`You win, ${humanChoice} beats ${computerChoice}!`);
        humanScore++;
    }
    else {
        console.log(`You lose, ${computerChoice} beats ${humanChoice}!`);
        computerScore++;
    }
}

// rock beats scissors, scissors beats paper, paper beats rock 

const humanSelection = getHumanChoice();
const computerSelection = getComputerChoice();


playRound(humanSelection, computerSelection); 