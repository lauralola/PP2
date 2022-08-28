// wait for DOM to finish loading before running the game
// Listen for button clicks with event listerers

document.addEventListener("DOMContentLoaded", function(){
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
 * Main game loop after user has played
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
    document.getElementsByClassName(num1).textContent = values[0]
    document.getElementsByClassName(num2) = values[1]
};

function hitMe2(){

};

function hitMe3(){

};

function hitMe4(){

};

function hold(){

};

function playerScore(){

};

function computerScore(){

};

function checkWinner(){}