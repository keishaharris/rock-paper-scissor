// The computer will generate a selection from an array of options 
const PLAY_OPTIONS = ['rock', 'scissor', 'paper']

let winnerTexts = [
    'Player wins this round!',
    'Computer wins this round!',
    'Tie!',
    'Player wins the game!',
    'You lose! Computer wins the game!'
]

let computerSelection;
let playerSelection;

const rock = document.querySelector('#rock');
const paper = document.querySelector('#paper');
const scissor = document.querySelector('#scissor');
const player = document.querySelector('.player');
const computer = document.querySelector('.computer');
const winner = document.querySelector('.winner.score');
const resetbtn = document.querySelector('#resetbtn');

rock.addEventListener('click', (e) => {
    playerSelection = PLAY_OPTIONS[0];
    playGame();
});
paper.addEventListener('click', (e) => {
    playerSelection = PLAY_OPTIONS[1];
    playGame();
});
scissor.addEventListener('click', (e) => {
    playerSelection = PLAY_OPTIONS[2];
    playGame();
});
resetbtn.addEventListener('click', (e) => {reset();});

let playerScore = 0;
let computerScore = 0;

player.textContent = `${playerScore}`;
computer.textContent = `${computerScore}`;

const computerPlay = () => {
    return PLAY_OPTIONS[Math.floor(Math.random() * PLAY_OPTIONS.length)];
}

const playRound = (playerSelection, computerSelection, PLAY_OPTIONS) => {
    if (
        playerSelection === PLAY_OPTIONS[0] && computerSelection === PLAY_OPTIONS[1] ||
        playerSelection === PLAY_OPTIONS[1] && computerSelection === PLAY_OPTIONS[2] ||
        playerSelection === PLAY_OPTIONS[2] && computerSelection === PLAY_OPTIONS[0]
        ){
        ++playerScore;
        player.textContent = `${playerScore}`;
        winner.textContent = `${winnerTexts[0]}`
        return playerScore;
        }
    else if (
        computerSelection === PLAY_OPTIONS[0] && playerSelection === PLAY_OPTIONS[1] ||
        computerSelection === PLAY_OPTIONS[1] && playerSelection === PLAY_OPTIONS[2] ||
        computerSelection === PLAY_OPTIONS[2] && playerSelection === PLAY_OPTIONS[0]
        ){
        ++computerScore;
        computer.textContent = `${computerScore}`;
        winner.textContent = `${winnerTexts[1]}`
        return computerScore;
        }
    else {
        winner.textContent = `${winnerTexts[2]}`
        return 'Tie';
    }
}   

const reset = () => {
    computerSelection, playerSelection;
    computer.textContent = computerScore = 0;
    player.textContent = playerScore = 0;
    winner.textContent = '';
    
}

const checkWinner = (computerScore, playerScore) => {
    if (computerScore == 5  || playerScore == 5){
        playerScore > computerScore ? 
        winner.textContent = `${winnerTexts[3]}` : 
        winner.textContent = `${winnerTexts[4]}`
    }
    else{
        return;
    }
}
// 5 rounds will occur and the player w/the most wins --> winner

const playGame = () =>{

        let computerSelection = computerPlay();
        console.log('Player', playerSelection);
        console.log('Computer', computerSelection);
        playRound(playerSelection, computerSelection, PLAY_OPTIONS);
        checkWinner(computerScore, playerScore);
}


