// Returns a random choice for the computer's turn
function computerPlay() {
    let randInt = Math.floor(Math.random() * 3);
    if (randInt === 0) {
        return 'rock';
    } else if ( randInt === 1) {
        return 'paper';
    } else {
        return 'scissors';
    }
}

// Compares player and computer's choices and declares win or lose
function playRound(e) {
    // Checks if game is already over, i.e. someone has a score of 5
    const playerScore = document.querySelector('.player-score');
    const computerScore = document.querySelector('.computer-score');
    if (playerScore.textContent >= 5 || computerScore.textContent >= 5) return;
    // Get player choice from event and get computer's move
    let playerSelection = e.target.id;
    let computerSelection = computerPlay()

    // Create list item and select the score list to append to
    const li = document.createElement('li');
    const ul = document.querySelector('#score-list');
    
    // Append win, loss, or tie to the score list
    if (playerSelection === computerSelection) {
        li.textContent = "It's a tie!"
        ul.appendChild(li);
        updateGame(li.textContent);
    } else if ((playerSelection === 'rock' && computerSelection === 'scissors')
                || (playerSelection === 'paper' && computerSelection === 'rock')
                || (playerSelection === 'scissors' && computerSelection === 'paper')) {
                    li.textContent = `You win! ${playerSelection} beats ${computerSelection}.`
                    ul.appendChild(li);
                    updateGame(li.textContent);
    } else {
        li.textContent = `You lose! ${computerSelection} beats ${playerSelection}.`;
        ul.appendChild(li);
        updateGame(li.textContent);
    }   
}

// Updates scores
function updateGame(result) {
    const playerScore = document.querySelector('.player-score');
    const computerScore = document.querySelector('.computer-score');

    if (result.slice(4,5) === 'w') {
        playerScore.textContent = Number(playerScore.textContent) + 1;
    } else if (result.slice(4,5) === 'l') {
        computerScore.textContent = Number(computerScore.textContent) + 1;
    }
}
// Resets the game and sets scores to zero
function resetGame() {
    // Sets scores to zero
    const playerScore = document.querySelector('.player-score');
    const computerScore = document.querySelector('.computer-score');
    playerScore.textContent = '0';
    computerScore.textContent = '0';
    // Wipes score-list of previous rounds
    const scoreList = document.querySelector("#score-list")
    while (scoreList.firstChild) {
        scoreList.removeChild(scoreList.firstChild);
    }
    
}

// Set event listeners for the three choices of moves
const rock = document.querySelector('img#rock');
rock.addEventListener('click', playRound);
const paper = document.querySelector('img#paper');
paper.addEventListener('click', playRound);
const scissors = document.querySelector('img#scissors');
scissors.addEventListener('click', playRound);

// Event listener for resetting the game
const resetButton = document.querySelector('button');
resetButton.addEventListener('click', resetGame)
