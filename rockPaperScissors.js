let humanScore = 0;
let computerScore = 0;

//creates math random number values with min-max for computers choice
function getComputerChoice(min, max) {
    return Math.floor(Math.random() * (max - min +1)) + min;
   }

//allows random number value to be between 1-3, and converts 1-3 to rock, paper, scissors
let computerResultNumber = getComputerChoice(1, 3);
let choices = {
    1: "rock",
    2: "paper",
    3: "scissors"
};

//shows results 
let computerResult = choices[computerResultNumber]; 
console.log(computerResult);

//humans choice rock paper scissors 

function getHumanChoice() {
let choice = prompt("Choose rock, paper, or scissors").toLowerCase();
if (choice === "rock" || getHumanChoice === "paper" || getHumanChoice === "scissors"){
    return choice;
} else {
    alert("Please enter a valid choice");
    return getHumanChoice();
}
};

function playRound(humanChoice, computerChoice) {
if (humanChoice === computerChoice) {
    alert("Tie Game!");
}
else if ( 
(humanChoice === "rock" && computerChoice === "scissors") ||
        (humanChoice === "paper" && computerChoice === "rock") ||
        (humanChoice === "scissors" && computerChoice === "paper"))
{
       alert(`"You win! ${humanChoice} beats ${computerChoice}"`);
       humanScore++;
    } else {
        alert(`"You Lose! ${computerScore} beats ${humanScore}"`)
        computerScore++;
    }
    alert(`Scores: human - ${humanScore}, Computer - ${computerScore}`);
}



const humanSelection = getHumanChoice();
const computerSelection = getComputerChoice();

playRound(humanSelection, computerSelection);
