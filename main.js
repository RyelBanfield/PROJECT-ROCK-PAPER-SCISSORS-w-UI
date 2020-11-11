// Keeps track of the current game round
let gameRound = 1;

// Keeps track of # of wins
let playerWins = 0;
let computerWins = 0;

let buttons = document.querySelectorAll('.btn');
let results = document.querySelector('#results');

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

// Adds to the player and computer win counters
function winCounter(roundValue, playerSelection, computerSelection) {
   if (roundValue == 1) {
      return ('You Draw! You both chose ' + playerSelection + '.');
   } else if (roundValue == 2) {
      playerWins++;
      return ('You Win! ' + playerSelection + ' beats ' + computerSelection + '.');
   } else {
      computerWins++;
      return ('You Lose! ' + computerSelection + ' beats ' + playerSelection + '.');
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


for (button of buttons) {
   button.addEventListener('click', function () {

      console.log("Game Round - " + gameRound);

      let playerSelection = this.textContent;
      let computerSelection = computerPlay();
      let roundValue = playRound(playerSelection, computerSelection);

      console.log('Player Selection: ' + playerSelection);
      console.log('Computer Selection: ' + computerSelection);

      let roundWinner = winCounter(roundValue, playerSelection, computerSelection);

      console.log(roundWinner);
      console.log('Player Wins: ' + playerWins);
      console.log('Computer Wins: ' + computerWins);
      console.log('------------------------------')


      gameRoundDiv.classList.add('gameRound', 'sepDiv');
      gameRoundDiv.textContent = "Game Round - " + gameRound;
      results.appendChild(gameRoundDiv);


      playerSelectionDiv.classList.add('playerSelection', 'sepDiv');
      playerSelectionDiv.textContent =
         ' Player Selection: ' + playerSelection
      results.appendChild(playerSelectionDiv);


      computerSelectionDiv.classList.add('playerSelection', 'sepDiv');
      computerSelectionDiv.textContent =
         ' Player Selection: ' + computerSelection;
      results.appendChild(computerSelectionDiv);


      roundWinnerDiv.classList.add('playerSelection', 'sepDiv');
      roundWinnerDiv.textContent = roundWinner;
      results.appendChild(roundWinnerDiv);


      playerWinsDiv.classList.add('playerSelection', 'sepDiv');
      playerWinsDiv.textContent = 'Player Wins: ' + playerWins;
      results.appendChild(playerWinsDiv);


      computerWinsDiv.classList.add('playerSelection', 'sepDiv');
      computerWinsDiv.textContent = 'Computer Wins: ' + computerWins;
      results.appendChild(computerWinsDiv);

      gameRound++;
   })
}