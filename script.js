// Console version 1.0
function createPlayer(name, simbol) {
    let points = 0;

    const getSimbol = () => simbol;
    const getName = () => name;
    const getWins = () => points;
    const giveWins = () => {
        points++;
    };

    return {getWins, giveWins, getName, getSimbol};
};

function boardGame(player1, player2) {
    const gameBoard = ["", "", "", "", "", "", "", "", ""];

    const winPattern = [
        [0, 1, 2],
        [3, 4, 5], 
        [6, 7, 8],

        [0, 3, 6], [1, 4, 7], [2, 5, 8],
        [0, 4, 8], [2, 4, 6]
    ];

    let turn = 0;
    let i = 0;

    alert(`${player1.getName()}: ${player1.getWins()} X ${player2.getName()}: ${player2.getWins()}`);
    while (i < 9){
        let currentPlayer = i % 2 === 0 ? "X" : "O";

        console.log(gameBoard);
        const getCurrentPlayer = () => currentPlayer;

        let player = prompt(`ROUND ${i+1} Player ${currentPlayer}: Inform the position (1-9) `);

        let positionBoard = Number(player) - 1;
        
        if (gameBoard[positionBoard] === ""){
            gameBoard[positionBoard] = currentPlayer;
            console.log(gameBoard);

            let winner = checkWinner(gameBoard);
            let winnerPlayer;

            if (winner) {
                if (winner === "X"){
                    player1.giveWins();
                    winnerPlayer = player1;
                } else if (winner === "O"){
                    player2.giveWins();
                    winnerPlayer = player2;
                };

                alert(`Congratulations, ${winnerPlayer.getName()} WON!`);

                (function clearBoard(){
                    for (let indice = 0; indice < gameBoard.length; indice++){
                        gameBoard[indice] = "";
                    }
                })();
                break;
            } else if (!winner && i === 8){
                alert("Empass");
                break;
            }
            i++;
        } else {
            alert("This position is already occupied");
        }
    };

    function checkWinner(gameBoard){
        for (let [a, b, c] of winPattern){
            if (gameBoard[a] && gameBoard[a] === gameBoard[b] && gameBoard[a] === gameBoard[c]){
                return gameBoard[c];
            }
        }
    };
};

// Song effects
const activeSong = document.getElementById("song");
const clickSound = document.getElementById("audioEffect");
const cells = document.querySelectorAll(".cell");

let soundOn = false;

activeSong.addEventListener("click", () => {
    soundOn = !soundOn;
});

cells.forEach(cell => {
    cell.addEventListener("click", () => {
        if (soundOn) {
            clickSound.currentTime = 0;
            clickSound.play();
        }
    });
});


const userInput = document.getElementById("userInput");
const startSound = document.getElementById("startSound");
const start = document.getElementById("start");
const user1 = document.getElementById("player1");
const user2 = document.getElementById("player2");

user1.addEventListener("click", () => {
    if (soundOn) {
        userInput.currentTime = 0;
        userInput.play();
    }
});

user2.addEventListener("click", () => {
    if (soundOn) {
        userInput.currentTime = 0;
        userInput.play();
    }
});

start.addEventListener("click", () => {
    if (soundOn) {
        startSound.currentTime = 0;
        startSound.play();
    }
});

const inputs = document.querySelectorAll("#player1, #player2");
const keySound = document.getElementById("key");

inputs.forEach(input => {
    input.addEventListener("keydown", () => {
        if (soundOn) {
            keySound.currentTime = 0;
            keySound.play();
        }
    });
});

// restart the page icon

const restart = document.getElementById("restart");
restart.addEventListener("click", () => {
    location.reload();
});

// UI version 2.0
let turn = "X";
let players = false;
// user input + start logic
start.addEventListener("click", () => {
    if (user1.value && user2.value){
        const playerName1 = user1.value;
        const playerName2 = user2.value;

        const play1 = createPlayer(playerName1, "X");
        const play2 = createPlayer(playerName2, "O");
        players = true;

        if (players){
                cells.forEach(cell => {
                cell.addEventListener("click", () => {
                    if (cell.textContent === "") {
                        cell.textContent = turn;
                        cell.classList.add(turn);
                        turn = turn === "X" ? "O" : "X";
                    }
                })
            })
        }

        user1.value = "";
        user2.value = "";
    } else {
        alert("Insert the users first")
    }
})

