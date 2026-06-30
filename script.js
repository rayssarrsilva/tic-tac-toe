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

const rate1 = document.getElementById("rate1");
const rate2 = document.getElementById("rate2");
const activeSong = document.getElementById("song");
const clickSound = document.getElementById("audioEffect");
const cells = document.querySelectorAll(".cell");

const board = document.getElementById("board");
const titleprincipal = document.getElementById("title-principal");
const borderLeft = document.getElementById("border-left");

const finalWinner = document.getElementById("finalWinner");
const winer = document.getElementById("winer");

function boardGame(player1, player2) {
    const gameBoard = ["", "", "", "", "", "", "", "", ""];

    const winPattern = [
        [0, 1, 2],
        [3, 4, 5], 
        [6, 7, 8],

        [0, 3, 6], [1, 4, 7], [2, 5, 8],
        [0, 4, 8], [2, 4, 6]
    ];

    let turn = "X";

    cells.forEach((cell, index) => {
        cell.addEventListener("click", () => {

            if (cell.textContent === "") {
                cell.textContent = turn;
                cell.classList.add(turn);
                turn = turn === "X" ? "O" : "X";
                gameBoard[index] = cell.textContent;

                let winner = checkWinner(gameBoard);
                if (winner) {

                    let winnerPlayer = winner === "X" ? player1 : player2;
                    winnerPlayer.giveWins();
                    rate1.textContent = player1.getWins();
                    rate2.textContent = player2.getWins();
                    setTimeout(() => {
                        alert("CONGRATULATIONS");
                        resetBoard();
                    }, 0);


                } else if (!winner && !gameBoard.includes("")) {
                    alert("Empass");
                    setTimeout(() => {
                        resetBoard();
                    }, 0);
                }
            }
        });
    });
    
    if (winnerPlayer.getWins() === 3){
        setTimeout(() => {
            showWinner(winnerPlayer);
        }, 0);
    } else {
        setTimeout(() => {
            alert(`${winnerPlayer.getName()} venceu a rodada`);
            resetBoard();
        }, 0);
    }

    function showWinner(player) {
        board.textContent = "";
        titleprincipal.textContent = "";
        borderLeft.textContent = "";

        finalWinner.style.display = flex;
        winer.className.add("won");
        winer.textContent = `Player ${player.getName()} WON`;
    }

    function resetBoard(){
        turn = "X";

        for (let i = 0; i < gameBoard.length; i++){
            gameBoard[i] = "";
        }

        cells.forEach(cell => {
            cell.textContent = "";
            cell.classList.remove("X", "O");
        })
    }

    function checkWinner(gameBoard){
        for (let [a, b, c] of winPattern){
            if (gameBoard[a] && gameBoard[a] === gameBoard[b] && gameBoard[a] === gameBoard[c]){
                return gameBoard[c];
            }
        }
        return null;
    };
};

// Song effects

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

// user input + start logic

function game(){
    let game = false;

    const getGame = () => game;
    const changeGame = () => game = true;

    return {getGame, changeGame};
}

const gameOn = game();

function Gamestarted(play1, play2) {

    if (!gameOn.getGame()) {
        boardGame(play1, play2);
        gameOn.changeGame();
    }
}

start.addEventListener("click", () => {
    if (user1.value && user2.value){
        const playerName1 = user1.value;
        const playerName2 = user2.value;

        const play1 = createPlayer(playerName1, "X");
        const play2 = createPlayer(playerName2, "O");

        Gamestarted(play1, play2);
        
        user1.value = "";
        user2.value = "";
    } else {
        alert("Insert the users first")
    }
});