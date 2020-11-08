// Keeps track of the current game round
let gameRound = 1;

// Keeps track of # of wins
let playerWins = 0;
let computerWins = 0;

// Asks the player for their choice
function playerPlay() {
   return prompt().toLowerCase();
}

// Generates a random choice for the computer
function computerPlay() {
   const choices = ["ROCK", "SCISSORS", "PAPER"];
   return choices[Math.floor(Math.random() * choices.length)];
}

// Plays 1 round of RPS
function playRound(playerSelection, computerSelection) {
   if (playerSelection == computerSelection) {
      return 1
   } else if (playerSelection == 'ROCK' && computerSelection == 'SCISSORS' || playerSelection == 'PAPER' && computerSelection == 'ROCK' || playerSelection == 'SCISSORS' && computerSelection == 'PAPER') {
      return 2
   } else {
      return 3
   }
}

// Adds to the player and computer win counters
function winCounter(roundValue, playerSelection, computerSelection) {
   if (roundValue == 1) {
      console.log('You Draw! You both chose ' + playerSelection + '.');
   } else if (roundValue == 2) {
      console.log('You Win! ' + playerSelection + ' beats ' + computerSelection + '.');
      playerWins++;
   } else {
      console.log('You Lose! ' + computerSelection + ' beats ' + playerSelection + '.');
      computerWins++;
   }
}

// Says who won after the game
function whoWon(playerWins, computerWins) {
   if (playerWins == computerWins) {
      console.log('It\'s a draw!');
   } else if (playerWins > computerWins) {
      console.log('You beat the computer!');
   } else {
      console.log('You got beat by the computer!');
   }
}

// Plays 5 rounds of RPS
function game() {
   console.log("Game Round - " + gameRound);
   let playerSelection = playerPlay();
   let computerSelection = computerPlay();
   let roundValue = playRound(playerSelection, computerSelection);
   console.log('Player Selection: ' + playerSelection);
   console.log('Computer Selection: ' + computerSelection);
   winCounter(roundValue, playerSelection, computerSelection);
   console.log('Player Wins: ' + playerWins);
   console.log('Computer Wins: ' + computerWins);
   gameRound++;
   whoWon(playerWins, computerWins);
}

// game();

////////////////////////////////////////////////////////////////
////////////////////////////////////////////////////////////////
////////////////////////////////////////////////////////////////
////////////////////////////////////////////////////////////////

let buttons = document.querySelectorAll('.btn');

for (button of buttons) {
   button.addEventListener('click', function () {
      console.log("Game Round - " + gameRound);
      let playerSelection = this.textContent;
      let computerSelection = computerPlay();
      let roundValue = playRound(playerSelection, computerSelection);
      console.log('Player Selection: ' + playerSelection);
      console.log('Computer Selection: ' + computerSelection);
      winCounter(roundValue, playerSelection, computerSelection);
      console.log('Player Wins: ' + playerWins);
      console.log('Computer Wins: ' + computerWins);
      gameRound++;
      console.log('------------------------------')
   })
}

