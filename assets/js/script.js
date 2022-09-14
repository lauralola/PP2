// wait for DOM to finish loading before running the game and send alert to explain game
// Listen for button clicks with event listerers

document.addEventListener("DOMContentLoaded", function(){
    alert('Welcome to 21. The aim of the game is to beat the computer. Choose to hit or hold wisely. Your aim is for the sum total of your cards to stay below 21 but as close to 21 as possible. When you choose hit, a card will be dealt to you. When you chose hold no card is dealt. When both player and computer select hold the game ends and cards and winner is revealed. Good luck!');
    
    let buttons= document.getElementsByTagName('button');

    for (let button of buttons){
        button.addEventListener('click', function(){
            if (this.getAttribute('data-type') === 'hit'){
                gamePlay();
            } else if (this.getAttribute('data-type') === 'hold'){
                playerHold();}
            else if (this.getAttribute('data-type') === 'reset'){
                reset();
            } else {
                alert('Please Hit or Hold!');
            }
        });
    }
});

let player1=0;

let player2=0;

// Deals random numbers between 1 and 12 to player1 and returns to console
function play1(){
    let num1 =  Math.floor(Math.random() * 12) +1; 
    player1 = player1 + num1;
    console.log("funct: play1, player1", player1);
    return player1;
}

// Deals random numbers between 1 and 12 to player2 (computer) and returns to console
function play2(){
    let num2 =  Math.floor(Math.random() * 12) +1; 
    player2 = player2 + num2;
  	console.log("funct: play2, player2",player2);
    return player2;
}

/**
 * *Displays the number's dealt to player 1 
 * If computer score is less than 17 continues to deal to computer otherwise triggers computerHold function*/

function gamePlay(){
    let playerScore = play1();
    console.log(playerScore, playerScore);
    document.getElementsByClassName('player')[0].innerText = String(playerScore);
    if (player2<17){
        play2();} else {
            computerHold();
            alert('Computer Holds!');
        }
        console.log("gamePlay func");
}

// Displays computer game score at end of game and sets terms for winners and losers
function endGame(){
    if (player1>21 && player2>21){
        alert('No Winner. Play Again!');}
    else if(player1>21 && player2<22) {
            alert('Computer Wins!');
            incrementLoss();}
    else if (player2>21 && player1<22) {
            alert('You Win!');
            incrementScore();} 
    else if (player2<22 && player2>player1){
            alert('Computer Wins!');
            incrementLoss();}
    else if (player1<22 && player1>player2){
            alert('You Win!');
            incrementScore();} 
    else {  alert('No Winner-Play Again!');
            }
    document.getElementsByClassName('computer')[0].innerText = String(player2);
    console.log("endGame func");    
}

/**
 * If player has pressed hold- continues to give computer cards if score less than 17
 * Otherwise triggers endGame function
 */

function playerHold(){
    do {play2();} while (player2<17);
        endGame();
        alert('Computer Holds');
    console.log("playerHold func");
}


// If computer is over 17 stops giving cards but continues to deal to player if pressing Hit Me.
function computerHold(){
    let buttons= document.getElementsByTagName('button');

    for (let button of buttons){
        button.addEventListener('click', function(){
            if (this.getAttribute('data-type') === 'hit'){
                play1();
            } else if (this.getAttribute('data-type') === 'hold'){
                endGame();}
            else if (this.getAttribute('data-type') === 'reset'){
                    reset();
            } else {
                alert('Please Hit or Hold!');
                }
            });
    
     }
    
     console.log("playerHold func");
    }
/**
 * Gets score from DOM and adds 1
 */
function incrementScore(){
    let oldScore= parseInt(document.getElementById('score').innerText);
    document.getElementById('score').innerText = ++oldScore;
    console.log("incrementScore func");
}

/**
 * Gets loss from DOM and adds 1
 */
function incrementLoss(){
    let oldLoss= parseInt(document.getElementById('loss').innerText);
    document.getElementById('loss').innerText = ++oldLoss;
    console.log("incrementLoss func");
}

function reset(){
    player1=0;
    player2=0;
    document.getElementsByClassName('computer')[0].innerText = '?';
    document.getElementsByClassName('player')[0].innerText = '0';
    console.log("reset func");
}