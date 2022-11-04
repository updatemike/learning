
function getComputerChoice() {
    const choices = ["rock", "paper", "scissors"];
    /* Randomly return rock, paper or scissor */
    return choices[Math.floor(Math.random() * choices.length)];
}

function getPlayerChoice() {
    /* Prompt asking for player choice of either Rock, Paper or Scissors */
    let playerChoice;
    while (playerChoice !== "rock" && playerChoice !== "paper" && playerChoice !== "scissors") {
        playerChoice = (prompt("Please choose Rock, Paper or Scissors.")).toLowerCase()
    }
    return playerChoice;
}

function stringCapital(string) {
    /* Turn first letter of string into uppercase */
    return string.slice(0, 1).toUpperCase() + string.slice(1);
}

function playRound() {
    /* Get computer and player choice and play a round of Rock,Paper,Scissors */
    const computerChoice = getComputerChoice();
    const playerChoice = getPlayerChoice();
    if (computerChoice === playerChoice) {
        return ["It was a tie. Both picked " + stringCapital(playerChoice) + ".",
            "t"];
    } else if ((playerChoice === "rock" && computerChoice === "scissors") ||
        (playerChoice === "scissors" && computerChoice === "paper") ||
        (playerChoice === "paper" && computerChoice === "rock")) {
        return ["You won! " + stringCapital(playerChoice) + " beats " + stringCapital(computerChoice) + ".",
            "w"]
    } else {
        return ["You lost! " + stringCapital(computerChoice) + " beats " + stringCapital(playerChoice) + ".",
            "l"];
    }
}

function game() {
    /* Play round. Report round result. Keep track of wins. Report winner and final score after 5 rounds. */
    let computerScore = 0;
    let playerScore = 0;
    let nRounds = 1;
    while (nRounds < 6) {
        let round = playRound();
        console.log(round[0]);
        if (round[1] === "w")
            playerScore++;
        else if (round[1] === "l")
            computerScore++;
        nRounds++;
    }
    if (playerScore > computerScore)
        return `You've won! Final score: Player ${playerScore} - ${computerScore} Computer`
    else if (playerScore < computerScore)
        return `You've Lost! Final score: Player ${playerScore} - ${computerScore} Computer`
    else
        return `It's a tie! Final score: Player ${playerScore} - ${computerScore} Computer`

}
