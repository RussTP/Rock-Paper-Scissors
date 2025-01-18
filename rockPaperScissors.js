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



//Rock paper scissors game logic  rock beats scissor, paper beats rock etc. 
function playRound(humanChoice, computerChoice) {
if (humanChoice === computerChoice) {
return `Tie Game! You both chose ${humanChoice}`;
}
else if ( 
        (humanChoice === "rock" && computerChoice === "scissors") ||
        (humanChoice === "paper" && computerChoice === "rock") ||
        (humanChoice === "scissors" && computerChoice === "paper"))
{       
        humanScore++;
       return `"You win! ${humanChoice} beats ${computerChoice}"`;
       
    } else {
        computerScore++;
        return `"You Lose! ${computerChoice} beats ${humanChoice}"`;
        
    }
}

const buttons = document.querySelectorAll(".choice-btn");
buttons.forEach((button) => {
    button.addEventListener("click", () => {
        const humanChoice = button.id;
        const computerChoice = getComputerChoice();
       const result = playRound(humanChoice, computerChoice);

    const resultContainer = document.querySelector("#resultContainer");   
    resultContainer.textContent = result;

    const scoreDiv = document.querySelector("#runningScore");
    scoreDiv.textContent = `Score: Human ${humanScore} - Computer ${computerScore}`;

    if (humanScore === 5 || computerScore === 5) {
    const winner = humanScore > computerScore ? "You" : "Computer";
    document.querySelector("#runningScore");
    runningScore.textContent = `${winner} won the game! Final Score ${humanScore} - Computer ${computerScore}`;
   
    }
    });
});






