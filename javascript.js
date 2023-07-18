//Randomly return rock, paper or scissor
function getComputerChoice () {
    switch( Math.floor( Math.random() * 3 ) ){

        case 0:
            return "Rock";
            break;        
        
        case 1:
            return "Paper";
            break;

        case 2:
            return "Scissor";
            break;
    }
}



function gameRound (playerSelection, computerSelection) {
    if(playerSelection === "Rock"){
        switch (computerSelection) {
            case "Rock":
                return `Draw! ${playerSelection} against ${computerSelection}.`;
                break;
            case "Paper":
                return `You Lose! ${computerSelection} beats ${playerSelection}.`;
                break;
            case "Scissor": 
                return `You Win! ${playerSelection} beats ${computerSelection}.`;
                break;
            default:
                return "Incorrect Inputs";
                break;
        }
    }

    else if(playerSelection === "Paper"){
        switch (computerSelection) {
            case "Paper":
                return `Draw! ${playerSelection} against ${computerSelection}.`;
                break;
            case "Scissor":
                return `You Lose! ${computerSelection} beats ${playerSelection}.`;
                break;
            case "Rock": 
                return `You Win! ${playerSelection} beats ${computerSelection}.`;
                break;
            default:
                return "Incorrect Inputs";
                break;
        }
    }

    else if(playerSelection === "Scissor"){
        switch (computerSelection) {
            case "Scissor":
                return `Draw! ${playerSelection} against ${computerSelection}.`;
                break;
            case "Rock":
                return `You Lose! ${computerSelection} beats ${playerSelection}.`;
                break;
            case "Paper": 
                return `You Win! ${playerSelection} beats ${computerSelection}.`;
                break;
            default:
                return "Incorrect Inputs";
                break;
        }
    }

    else{
        return "Incorrect Inputs";
    }
}




let computerSelection = getComputerChoice();
let playerSelection = prompt("Choose your move!");
playerSelection = playerSelection.slice(0,1).toUpperCase() + playerSelection.slice(1).toLowerCase();

console.log("You chose " + playerSelection)
console.log("Computer chose " + computerSelection);
console.log(gameRound(playerSelection, computerSelection));