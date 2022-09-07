// wait for DOM to finish loading before running the game and send alert to explain game
// Listen for button clicks with event listerers

document.addEventListener("DOMContentLoaded", function(){
    alert('Welcome to 21. The aim of the game is to beat the computer. Choose to hit or hold wisely. Your aim is for the sum total of your cards to stay below 21 but as close to 21 as possible. When you choose hit, a card will be dealt to you. When you chose hold no card is dealt. When both player and computer select hold the game ends and cards and winner is revealed. Good luck!')
    let buttons= document.getElementsByTagName('button');

    for (let button of buttons){
        button.addEventListener('click', function(){
            if (this.getAttribute('data-type')=== 'hit'){
                runGame();
            } else {
                alert('Hold')
            }
        })
    }

    runGame();
})

/**
 * Main game loop after user has played- shuffles 12 numbers and records clicks on hit me button- 
 * For 1st hitme should trigger fxn to deal card 1 and 2 etc
 * For hold should trigger hold fxn
 */
function runGame(){

    let values=['1', '2', '3', '4', '5', '6', '7', '8', '9', '10', '11', '12']
    function shuffle(values){return values.sort (()=> Math.random() -0.5)};

    shuffle(values);

    let clickState = 0;

    function hitMe(){
        let clickState = 0;
        clickState++;
        if (clickState==1){
            function hitMe1()
            } else if (clickState ==2){
            function hitMe2()
            } else if (clickState ==3){
            function hitMe3()
            } else if (clickState ==4){
            function hitMe4()}
            else {
            alert('Hold');
            function hold()
            }

    // // creates 8 random numbers between 1 and 12
    // let num1= Math.floor(Math.random()*12)+1;
    // let num2= Math.floor(Math.random()*12)+1;
    // let num3= Math.floor(Math.random()*12)+1;
    // let num4= Math.floor(Math.random()*12)+1;
    // let num5= Math.floor(Math.random()*12)+1;
    // let num6= Math.floor(Math.random()*12)+1;
    // let num7= Math.floor(Math.random()*12)+1;
    // let num8= Math.floor(Math.random()*12)+1;
}};

function hitMe1(num1, num2){
how to get values from above fxn to pull to here- should it be global??

    document.getElementsByClassName(num1).textContent = values[0]
    document.getElementsByClassName(num2) = values[1]

    change computer card from red to black and store value somewhere for later- how to!!
};

function hitMe2(){

};

function hitMe3(){

};

function hitMe4(){

};

function computerRoundScore(){
    tot up computer cards each round- if <19 deal if > hold
}

function hold(){
    hold player card deal to computer if <19- how to bring this here from above fxn
};

function playerScore(){
    add num 1, 3, 5 and 7- what if 5 and 7 empty??
};

function computerScore(){
    where stored??
};

function checkWinner(){
    how to define playerScore vs computerScore here from above fxn

    if (player above 21) or 
    if (computerScore <21 and > playerScore) {
        alert('Computer Wins'); 
        incrementLoss();
    }
    else if (computer above 21) or 
    if (playerScore <21 and >computerScore) {
        alert('You Win!'); 
        incrementScore();
    }
    else if (computer===player) or (both computer and player over 21) {
        alert('No Winner- Play Again');
        runGame();}
}

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
};
