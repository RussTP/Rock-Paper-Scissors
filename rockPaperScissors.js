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

function getHumanChoice() {
    let choice;
    while (true) {
        choice = prompt("Choose rock, paper, or scissors");
        if (choice) {
            choice = choice.toLowerCase();
    if (choice === "rock" || choice === "paper" || choice === "scissors") {
        return choice; 
       }
     }
    
     alert("Please enter a valid choice");
    
     }
    }



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
};

const buttons = document.querySelectorAll(".choice-btn");
buttons.forEach((button) => {
    button.addEventListener("click", () => {
        const humanChoice = button.id;
        const computerChoice = getComputerChoice();
        playRound(humanChoice, computerChoice);
    })
})






//Logic to play entire game, best of 5

/*function playGame() {
for (let i = 0; i < 5; i++) {
const humanSelection = getHumanChoice();
const computerSelection = getComputerChoice();
playRound(humanSelection, computerSelection);
}
}
playGame();
*/