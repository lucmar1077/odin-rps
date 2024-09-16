let humanScore = 0;
let computerScore = 0;

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

function playRound(humanChoice, computerChoice) {

    const winConditions = {
        rock: "scissors",
        scissors: "paper",
        paper: "rock"
    };

    if (humanChoice === computerChoice) {
        console.log("Tie!");
    } else if (winConditions[humanChoice] === computerChoice) {
        console.log(`You win, ${humanChoice} beats ${computerChoice}!`);
        humanScore++;
    } else {
        console.log(`You lose, ${computerChoice} beats ${humanChoice}!`);
        computerScore++;
    }
}

function playGame() {
    for (let i = 0; i < 5; i++) {
        const humanSelection = getHumanChoice();
        const computerSelection = getComputerChoice();
        playRound(humanSelection, computerSelection);
    }
    if (humanScore === computerScore) {
        console.log(`You tied!`);
    } else if (humanScore > computerScore) {
        console.log(`You won the game! The final score was ${humanScore}-${computerScore}.`);
    } else {
        console.log(`You lost the game! :( The final score was ${humanScore}-${computerScore}.`);
    }
}

playGame();
