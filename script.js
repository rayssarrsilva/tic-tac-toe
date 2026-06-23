const gameboard = {

};

function player(name) {
    const points = 0;

    const getWins = () => points;
    const giveWins = () => {
        points++
    };

    return {getWins, giveWins, name};
}

const controlFlow = {

};