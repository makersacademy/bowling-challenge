const bowlingScore = (game) => {
    let runningTotal = 0;
    let modifiers = []

    for(let i = 0; i < 9; i++){
        let frameTotalPins = game[i][0] + game[i][1]
        runningTotal += frameTotalPins

        if (frameTotalPins === 10) { modifiers[i] = 'spare' }
        if (game[i][0] === 10) { modifiers[i] = 'strike' }
        if (modifiers[i - 1] === 'spare') { runningTotal += game[i][0] }
        if (modifiers[i - 1] === 'strike') { runningTotal += game[i][0] }
        if (modifiers[i - 2] === 'strike') { runningTotal += game[i][0] }
    }

    if (modifiers[7] === 'strike') {
        runningTotal += game[9][0]
    }

    if (modifiers[8] === 'strike') {
        runningTotal += game[9][0]
        runningTotal += game[9][1]
    }

    for(let ball of game[9]) {
        runningTotal += ball
    }

    return runningTotal;
}

module.exports = bowlingScore