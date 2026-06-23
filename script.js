const gameboard = {

};

function createPlayer(name) {
    let points = 0;

    const getWins = () => points;
    const giveWins = () => {
        points++;
    };

    return {getWins, giveWins, name};
}

const p1 = createPlayer("rayssa");
const p2 = createPlayer("roberta");

p1.giveWins();
p1.giveWins();

console.log(p1.getWins());

const controlFlow = {

};