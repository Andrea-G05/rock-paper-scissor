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



function playRound (playerSelection, computerSelection) {
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
			case "Rock": 
				return `You Win! ${playerSelection} beats ${computerSelection}.`;
				break;
			case "Paper":
				return `Draw! ${playerSelection} against ${computerSelection}.`;
				break;
			case "Scissor":
				return `You Lose! ${computerSelection} beats ${playerSelection}.`;
				break;
			default:
				return "Incorrect Inputs";
				break;
		}
	}

	else if(playerSelection === "Scissor"){
		switch (computerSelection) {
			case "Rock":
				return `You Lose! ${computerSelection} beats ${playerSelection}.`;
				break;
			case "Paper": 
				return `You Win! ${playerSelection} beats ${computerSelection}.`;
				break;
			case "Scissor":
				return `Draw! ${playerSelection} against ${computerSelection}.`;
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

function printRound(playerChoice){
	let result = playRound(playerChoice, getComputerChoice());
	const para = document.createElement("p");
	para.textContent = result;
	document.querySelector(".resultContainer").appendChild(para);
	
	return result;
}

function playGame (){
	switch (printRound(this.dataset.rps).slice(0,5)){
		case "You W":
			winCounter++;
			roundCounter++
			break;
		case "You L":
			loseCounter++;
			roundCounter++
			break;
		default:
			roundCounter++;
			break;
	};

	const scorePara = document.querySelector(".gameScore")
	scorePara.textContent = `Won ${winCounter} | Lost ${loseCounter}`

	if(roundCounter >= 5){
		scorePara.textContent += " | Game Ended "
		if(winCounter > loseCounter){
			scorePara.textContent += " | You Win"
		}else if (winCounter < loseCounter){
			scorePara.textContent += " | You Lose"
		}else{
			scorePara.textContent += " | No Winners"
		}

		buttons.forEach(button => {
			button.removeEventListener("click",playGame)
		})
	}
}


let roundCounter = 0;
let winCounter = 0;
let loseCounter = 0;

const buttons = document.querySelectorAll("button");
buttons.forEach(button => {
	button.addEventListener("click",playGame)
})