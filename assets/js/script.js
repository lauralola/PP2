// wait for DOM to finish loading before running the game and send alert to explain game
// Listen for button clicks with event listerers

document.addEventListener("DOMContentLoaded", function(){
    alert('Welcome to 21. The aim of the game is to beat the computer. Choose to hit or hold wisely. Your aim is for the sum total of your cards to stay below 21 but as close to 21 as possible. When you choose hit, a card will be dealt to you. When you chose hold no card is dealt. When both player and computer select hold the game ends and cards and winner is revealed. Good luck!');
    
    let buttons= document.getElementsByTagName('button');

    for (let button of buttons){
        button.addEventListener('click', function(){
            if (this.getAttribute('data-type') === 'hit'){
                gamePlay();
            } else {
                alert('Hold')
                endGame();
            }
        })
    }

    gamePlay();
})

let player1=0;

let player2=0;

function play1(){

    let num1 =  Math.floor(Math.random() * 12) +1; 
    player1 = player1 + num1;
    return player1;
}
    
function play2(){
    let num2 =  Math.floor(Math.random() * 12) +1; 
    player2 = player2 + num2;
    return player2;
}

function gamePlay(){
    play1();
    document.getElementsByClassName('player').textContent = player1;
    if (player2 <=19){
        play2()} else {
            alert('Computer Holds!')
            play1();
        }
}

function endGame(){
    if((player1 > 21) || (player2 > player1)){
        alert('Computer Wins!');
        incrementLoss();
    } else if (player1 > player2){
        alert('You Win!')
        incrementScore();
    } else {
        alert('No Winner-Play Again!')
        runGame();
    }
}

// function hold(){
//     hold player card deal to computer if <19- how to bring this here from above fxn
// };


/**
 * Gets score from DOM and adds 1
 */
function incrementScore(){
    let oldScore= parseInt(document.getElementById('score').innerText);
    document.getElementById('score').innerText = ++oldScore;
};

/**
 * Gets loss from DOM and adds 1
 */
function incrementLoss(){
    let oldLoss= parseInt(document.getElementById('loss').innerText);
    document.getElementById('loss').innerText = ++oldLoss;
}