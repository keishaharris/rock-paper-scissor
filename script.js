// The user is prompted to input a selection of Rock, Paper, or Scissor
// The computer will generate a selection from an array of options 
const PLAY_OPTIONS = ['rock', 'scissor', 'paper']

let computerSelection = computerPlay();
let playerSelection = 'rock';

function computerPlay(){
    return PLAY_OPTIONS[Math.floor(Math.random() * PLAY_OPTIONS.length)];
}
// Wrie a function that determines users selection: 
    // Rock > Scissor
    // Scissor > Paper
    // Paper > Rock 

function playRound(){
    console.log(playerSelection, computerSelection)
    if (
        playerSelection === PLAY_OPTIONS[0] && computerSelection === PLAY_OPTIONS[1] ||
        playerSelection === PLAY_OPTIONS[1] && computerSelection === PLAY_OPTIONS[2] ||
        playerSelection === PLAY_OPTIONS[2] && computerSelection === PLAY_OPTIONS[0]
        ){
            console.log('Player, You Win!');
        }
    else if  (
        computerSelection === PLAY_OPTIONS[0] && playerSelection === PLAY_OPTIONS[1] ||
        computerSelection === PLAY_OPTIONS[1] && playerSelection === PLAY_OPTIONS[2] ||
        computerSelection === PLAY_OPTIONS[2] && playerSelection === PLAY_OPTIONS[0]
        )
        {
           console.log('Computer Wins, You Lose');
        }

    else {
        console.log(`It's a tie!`)
    }
}   


playRound()

// 5 rounds will occur and the player will the most wins out of 5 will
// be the winner

// function playGame(){
//     for(let i = 0; i < 5; i++){
//         // Winner will be noted and stored for each round
//         let winner = []
//         playRound();
//     }
// }