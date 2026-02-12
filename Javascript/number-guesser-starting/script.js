let humanScore = 0;
let computerScore = 0;
let currentRoundNumber = 1;

// Write your code below:

generateTarget = () => {
    return Math.floor(Math.random() * 10);
    }
compareGuesses = (humanGuess, computerGuess, targetNumber) => {
    return Math.abs(humanGuess - targetNumber) <= Math.abs(computerGuess - targetNumber)
}
updateScore = (winner) => {
    if (winner === 'human') {
        humanScore++;
    }
    else computerScore++;
}

advanceRound = () => {
    currentRoundNumber++;
}


// Check if returns true when human wins
humanScore = 5
computerScore = 7
advanceRound()
advanceRound()
advanceRound()
advanceRound()
advanceRound()
console.log(currentRoundNumber)
updateScore('human')
updateScore('lol')
console.log(humanScore)
console.log(computerScore)
console.log(compareGuesses(5, 10, 5))

