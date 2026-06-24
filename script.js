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

    let i = 0;
    console.log("The board is 3x3");

    while (i <= 8){
        let position1 = prompt("Player 1: Inform the Line and Column. Example: 1 3");
        let position2 = prompt("Player 2: Inform the Line and Column. Example: 1 3");

        let [line, col] = position1.split(" ").map(Number);
        let [line1, col1] = position2.split(" ").map(Number);

        line = line -1;
        col = col - 1;
        line1 -= 1;
        col1 = col1 - 1;

        if (gameBoard[line][col] === ""){
            gameBoard[line][col] = "X";
            console.log(gameBoard);

            winner = checkWinner(gameBoard);
            if (winner) {
                alert(`${winner} venceu`);
            } else if (!winner && gameBoard.every(cell => cell !== "")){
                alert("Empass");
            }

            i++
        } else {
            alert("This position is marked, choose again");
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

boardGame();