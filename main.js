// Keeps track of the current game round
let gameRound = 1;

// Keeps track of # of wins
let playerWins = 0;
let computerWins = 0;

// Stores HTML elements
let buttons = document.querySelectorAll('.btn');
let results = document.querySelector('#results');

// Creates empty divs and stores them
let gameRoundDiv = document.createElement('div');
let playerSelectionDiv = document.createElement('div');
let computerSelectionDiv = document.createElement('div');
let roundWinnerDiv = document.createElement('div');
let playerWinsDiv = document.createElement('div');
let computerWinsDiv = document.createElement('div');

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

// Adds to the player and computer win counters & returns message
function winCounter(roundValue, playerSelection, computerSelection) {
   if (roundValue == 1) {
      return ('You draw this round! You both chose ' + playerSelection + '.');
   } else if (roundValue == 2) {
      playerWins++;
      return ('You win this round! ' + playerSelection + ' beats ' + computerSelection + '.');
   } else {
      computerWins++;
      return ('You lose this round! ' + computerSelection + ' beats ' + playerSelection + '.');
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

// The running of the game
for (button of buttons) {
   button.addEventListener('click', function () {

      let playerSelection = this.textContent;
      let computerSelection = computerPlay();
      let roundValue = playRound(playerSelection, computerSelection);

      let roundWinner = winCounter(roundValue, playerSelection, computerSelection);

      gameRoundDiv.classList.add('gameRound', 'sepDiv');
      playerSelectionDiv.classList.add('playerSelection', 'sepDiv');
      computerSelectionDiv.classList.add('playerSelection', 'sepDiv');
      roundWinnerDiv.classList.add('playerSelection', 'sepDiv');
      playerWinsDiv.classList.add('playerSelection', 'sepDiv');
      computerWinsDiv.classList.add('playerSelection', 'sepDiv');

      gameRoundDiv.textContent = "Game Round - " + gameRound;
      playerSelectionDiv.textContent =
         ' Player Selection: ' + playerSelection;
      computerSelectionDiv.textContent =
         ' Player Selection: ' + computerSelection;
      roundWinnerDiv.textContent = roundWinner;
      playerWinsDiv.textContent = 'Player Wins: ' + playerWins;
      computerWinsDiv.textContent = 'Computer Wins: ' + computerWins;

      results.appendChild(gameRoundDiv);
      results.appendChild(playerSelectionDiv);
      results.appendChild(computerSelectionDiv);
      results.appendChild(roundWinnerDiv);
      results.appendChild(playerWinsDiv);
      results.appendChild(computerWinsDiv);
      gameRound++;
   })
}