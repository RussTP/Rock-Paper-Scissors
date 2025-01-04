function getComputerChoice(min, max) {
    return Math.floor(Math.random() * (max - min +1)) + min;
   }

let computerResultNumber = getComputerChoice(1, 3);
let choices = {
    1: "Rock",
    2: "Paper",
    3: "Scissors"
};

let computerResult = choices[computerResultNumber]; 
console.log(computerResult);

