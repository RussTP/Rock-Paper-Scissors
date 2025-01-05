let humanScore = 0;
let computerScore = 0;

//creates math random number values with min-max for computers choice and defines each number into a string
function getComputerChoice() {
    const choice = {
    0:"rock",
    1: "paper",
    2: "scissors"
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

//Rock paper scissors game logic  rock beats scissor, paper beats rock etc. 
function playRound(humanChoice, computerChoice) {
if (humanChoice === computerChoice) {
    alert("Tie Game!");
}
else if ( 
        (humanChoice === "rock" && computerChoice === "scissors") ||
        (humanChoice === "paper" && computerChoice === "rock") ||
        (humanChoice === "scissors" && computerChoice === "paper"))
{
       console.log(`"You win! ${humanChoice} beats ${computerChoice}"`);
       humanScore++;
    } else {
        console.log(`"You Lose! ${computerChoice} beats ${humanChoice}"`);
        computerScore++;
    }
    console.log(`Scores: human - ${humanScore}, Computer - ${computerScore}`);
}


//Logic to play entire game, best out of 5

function playGame() {
for (let i = 0; i < 5; i++) {
const humanSelection = getHumanChoice();
const computerSelection = getComputerChoice();
playRound(humanSelection, computerSelection);
}
}
playGame();
