let humanScore = 0;
let computerScore = 0;

//creates math random number values with min-max for computers choice
function getComputerChoice() {
    const choice = {
    1:"rock",
    2: "paper",
    3: "scissors"
    };
    const randomValue = Math.floor(Math.random() * 3);
    return choice[randomValue];

}



//humans choice rock paper scissors 

function getHumanChoice() {
let choice = prompt("Choose rock, paper, or scissors").toLowerCase();
if (choice === "rock" || choice === "paper" || choice === "scissors")
    return choice; 
 else {
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
