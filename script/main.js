window.addEventListener("load",bindEvents);

function bindEvents() {
    let button = document.getElementsByTagName("button");

    for(let i = 0; i < button.length; i++) {
        // console.log(button[i]);
        button[i].addEventListener("click", printXorZero);
    }
}

var isXorZero = true;
var count = 0;
var player = 0;
let gameState = ["","","","","","","","",""];

function printXorZero(clickedCellEvent) {
    
    let player1 = "Now player 1 turn";
    let player2 = "Now player 2 turn";

    document.getElementsByTagName("h1")[0].innerHTML = isXorZero ? player2 : player1;

    const clickedCell = clickedCellEvent.target;
    const clickedCellIndex = parseInt(
        clickedCell.getAttribute("data-cell-index")
    );
    gameState[clickedCellIndex] = isXorZero ? "X" : "0";

    this.innerText = isXorZero ? "X" : "0";
    if(this.innerText === "X" || this.innerText === "0"){
        this.disabled = true;
    }


isXorZero = !isXorZero;
    count++;

    if(count >= 5){
        var confir = checkWinner();
        if(confir){
            location.reload();
        }
    }
}

const winningConditions = [
    [0, 1, 2],
    [3, 4, 5],
    [6, 7, 8],
    [0, 3, 6],
    [1, 4, 7],
    [2, 5, 8],
    [0, 4, 8],
    [2, 4, 6]
  ];

function checkWinner(){
    let roundWon = false;

    for(let i=0; i<8;i++) {
        let winCondition = winningConditions[i];
        let a = gameState[winCondition[0]];
        let b = gameState[winCondition[1]];
        let c = gameState[winCondition[2]];
        if (a === "" || b === "" || c === "") {
        continue;
        }
        else if (a === b && b === c && c === "X") {
            roundWon = true;
            player = 1;
            break;
        }else if (a === b && b === c && c === "0"){
            roundWon = true;
            break;
        }
    }

    if (roundWon && player === 1) {
        alert("Congrats Player 1 You won the game!");
        var confir = confirm("You want to restart the game?");
        return confir;

    }else if (roundWon && player === 0) {
        alert("Congrats Player 2 You won the game!");
        var confir = confirm("You want to restart the game?");
        return confir;
        
    }else if(!gameState.includes("")){
        alert("Game ended in a draw!");
        return;
    }
}
