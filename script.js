// The user is prompted to input a selection of Rock, Paper, or Scissor
// The computer will generate a selection from an array of options 
const PLAY_OPTIONS = ['rock', 'scissor', 'paper']

let computerSelection;
let playerSelection;



let playerScore = 0;
let computerScore = 0;

function computerPlay(){
    return PLAY_OPTIONS[Math.floor(Math.random() * PLAY_OPTIONS.length)];
}
// Wrie a function that determines users selection: 
    // Rock > Scissor
    // Scissor > Paper
    // Paper > Rock 

function playRound(playerSelection, computerSelection, PLAY_OPTIONS){
    if (
        playerSelection === PLAY_OPTIONS[0] && computerSelection === PLAY_OPTIONS[1] ||
        playerSelection === PLAY_OPTIONS[1] && computerSelection === PLAY_OPTIONS[2] ||
        playerSelection === PLAY_OPTIONS[2] && computerSelection === PLAY_OPTIONS[0]
        ){
        ++playerScore;
        console.log('Player', playerScore)
        return playerScore;
        }
    else if (
        computerSelection === PLAY_OPTIONS[0] && playerSelection === PLAY_OPTIONS[1] ||
        computerSelection === PLAY_OPTIONS[1] && playerSelection === PLAY_OPTIONS[2] ||
        computerSelection === PLAY_OPTIONS[2] && playerSelection === PLAY_OPTIONS[0]
        ){
        ++computerScore;
        console.log('Computer', computerScore)
        return computerScore;
        }
    else {
        return 'Tie';
    }
}   

function checkWinner(computerScore, playerScore){
    if (computerScore >= 1 || playerScore >= 1){
        playerScore > computerScore ? console.log('Player Wins') : console.log('Computer Wins')
    }
    else{
        console.log('Tie!')
    }
}
// 5 rounds will occur and the player w/the most wins is winner

function playGame(){
    let winnerRound;
    
    for(let i = 0; i < 5; i++){
        let computerSelection = computerPlay();
        let playerSelection = window.prompt('rock, scissors or paper?').toLowerCase();;
        console.log(computerSelection)
        playRound(playerSelection, computerSelection, PLAY_OPTIONS);
        if (i == 4){
            checkWinner(computerScore, playerScore);
        }
    }
}

playGame();
