function getRandomInt(min, max) {
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min + 1)) + min;
}

let x = getRandomInt(0,2);
  
const moves = ["ROCK", "PAPER", "SCISSORS"];
  
  function getPlayerChoice() {
    // Store the player's choice in a variable
    let playerSelection = prompt("Your move?").toUpperCase();
    return playerSelection; // Return the choice for later use
  }
  

  // Call the functions to get player and computer choices
  let playerChoice = getPlayerChoice();
  let computerChoice = moves[x];
  
  function playGame() {
    if (
      (playerChoice === "ROCK" && computerChoice === "SCISSORS") ||
      (playerChoice === "PAPER" && computerChoice === "ROCK") ||
      (playerChoice === "SCISSORS" && computerChoice === "PAPER")
    ) {
      alert(`You win, ${playerChoice} beats ${computerChoice}`);
    } else if (playerChoice === computerChoice) {
      alert(`It's a draw`);
    } else {
      alert(`You lose, ${computerChoice} beats ${playerChoice}`);
    }
  }
  
  playGame();
  