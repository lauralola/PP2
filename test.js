let clickstate = 0;

let player1=0;

let player2=0;

function getNumber(){

    let values =  Math.floor(Math.random() * 12); 
    console.log(`The random number is ${values}`);
    player1 = player1 + values;

    // let buttons= document.getElementsByTagName('button');

    // for (let button of buttons){
    //     button.addEventListener('click', function(){
    //         if (this.getAttribute('data-type')=== 'hit'){
    //             gamePlay();
    //         } else {
    //             console.log('Hold')
    //         }}

    console.log(`Player 1 score is ${player1}`)
    return values;
}

function gamePlay(){
    do {
    getNumber()
} while (player1 <= 21)
}

gamePlay();
