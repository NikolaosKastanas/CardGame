let leftCard = document.getElementById("leftCard");
let rightCard = document.getElementById("rightCard");
let dealBtn = document.getElementById("dealBtn");
let playerScore = document.getElementById("playerScore");
let cpuScore = document.getElementById("cpuScore");
let resultText = document.getElementById("resultText");


let cardImages = [
    "images/card2.svg",
    "images/card3.svg",
    "images/card4.svg",
    "images/card5.svg",
    "images/card6.svg",
    "images/card7.svg",
    "images/card8.svg",
    "images/card9.svg",
    "images/card10.svg",
    "images/card11.svg",
    "images/card12.svg",
    "images/card13.svg",
    "images/card14.svg",
]



dealBtn.onclick = function(){

    resultText.textContent = "";

    let indexLeft = Math.floor(Math.random() * cardImages.length)
    leftCard.src = cardImages[indexLeft];

    let indexRight = Math.floor(Math.random() * cardImages.length)
    rightCard.src = cardImages[indexRight];

    if (indexLeft > indexRight){
        playerScore.textContent = Number(playerScore.textContent) + 1;
    }
    else if (indexRight > indexLeft){
        cpuScore.textContent = Number(cpuScore.textContent) + 1;
    }
    
    if (Number(playerScore.textContent) === 10) {
        resetGame("Player");
    } 
    else if (Number(cpuScore.textContent) === 10) {
        resetGame("CPU");
    }
}

function resetGame(winner){
    resultText.textContent = `${winner} wins!`;

    playerScore.textContent = 0;
    cpuScore.textContent = 0;

    leftCard.src = "images/back.svg";
    rightCard.src = "images/back.svg";
}
