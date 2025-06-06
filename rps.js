let result = { win: 0, lose: 0, tie: 0 };
const moveEle = document.getElementById('move')
const resultEle = document.getElementById('result')
const scoreEle = document.getElementById('score')
function playerMove(playMove) {
    const computerMove = generateComputerMove();
    moveEle.textContent = `Player Move : ${playMove} | Computer Move : ${computerMove}`

    switch (playMove) {
        case 'Rock':
            switch (computerMove) {
                case 'Rock': result.tie++; break;
                case 'Paper': result.lose++; break;
                case 'Scissor': result.win++; break;
            }
            break;

        case 'Paper':
            switch (computerMove) {
                case 'Rock': result.win++; break;
                case 'Paper': result.tie++; break;
                case 'Scissor': result.lose++; break;
            }
            break;

        case 'Scissor':
            switch (computerMove) {
                case 'Rock': result.lose++; break;
                case 'Paper': result.win++; break;
                case 'Scissor': result.tie++; break;
            }
            break;
    }
    resultEle.textContent = `Win : ${result.win} Lose : ${result.lose} Tie : ${result.tie}`
}

function generateComputerMove() {
    let random = Math.random();
    if (random < 0.33)
        return 'Rock'
    else if (random < 0.66)
        return 'Paper'
    else
        return 'Scissor'
}

function reset() {
    result.win = 0;
    result.lose = 0;
    result.tie = 0
    resultEle.innerHTML = `Win : ${result.win} Lose : ${result.lose} Tie : ${result.tie}`
}

