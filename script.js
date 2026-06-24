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

(function controlFlow() {
    const name1 = prompt("Player 1 name: ");
    const player1 = createPlayer(name1, "X");
    console.log(`${name1} is ready`);

    const name2 = prompt("Player 2 name: ");
    const player2 = createPlayer(name2, "O");
    console.log(`${name2} is ready`);

    let x = 1;
    while (x < 4){
        boardGame(player1, player2);
        x++;
    }

    if (player1.getWins() === 3){
        alert(`Player 1 WON with ${player1.getWins()} x ${player2.getWins()}`);
    } else {
        alert(`Player 2 WON with ${player2.getWins()} x ${player1.getWins()}`);
    }

})();
