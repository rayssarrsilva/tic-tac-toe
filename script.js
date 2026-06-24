function createPlayer(name) {
    let points = 0;

    const getWins = () => points;
    const giveWins = () => {
        points++;
    };

    return {getWins, giveWins, name};
}

(function controlFlow() {
    
})();

function boardGame() {
    let gameBoard = ["", "", "", "", "", "", "", "", ""];

    const winPattern = [
        [0, 1, 2],
        [3, 4, 5], 
        [6, 7, 8],

        [0, 3, 6], [1, 4, 7], [2, 5, 8],
        [0, 4, 8], [2, 4, 6]
    ];

    console.log("The board is 3x3");

    let turn = 0;
    let i = 0;

    while (i < 9){
        let currentPlayer = i % 2 === 0 ? "X" : "O";
        console.log(gameBoard);
        const getCurrentPlayer = () => currentPlayer;

        let player = prompt(`ROUND ${i+1} Player ${currentPlayer}: Inform the position (1-9) `);
        let positionBoard = Number(player) - 1;
        
        if (gameBoard[positionBoard] === ""){
            gameBoard[positionBoard] = currentPlayer;
            console.log(gameBoard);

            winner = checkWinner(gameBoard);
            if (winner) {
                alert("Congratulations you won");
                (function clearBoard(){
                    for (let indice = 0; indice < gameBoard.length; indice++){
                        gameBoard[cell] === "";
                    }
                })();
            } else if (!winner && i === 8){
                alert("Empass");
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

    return {getCurrentPlayer};
};

boardGame();