let computerChoice = 0;
function getComputerChoice() {

    computerChoice = Math.floor(Math.random() * 3);

    switch (computerChoice) {
        case 0:
            computerChoice = "Rock";
            break;
        case 1:
            computerChoice = "Paper";
            break;
        case 2: 
            computerChoice = "Scissors"
            break;   
    }
}

let humanChoice = "";
function getHumanChoice () {
    return humanChoice = prompt("Choose: Rock | Paper | Scissors");
}

humanChoice = getHumanChoice();

// Prompt the user for their choice
// Go through the logic --> 
// if 