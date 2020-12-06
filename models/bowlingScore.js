const bowlingScore = (game) => {
    let runningTotal = 0;
    let modifiers = []

    for(let i in game){
        frameTotalPins = game[i][0] + game[i][1]
        runningTotal += frameTotalPins

        if (frameTotalPins === 10) { modifiers[i] = 'spare' }
        if (modifiers[i - 1] === 'spare') { runningTotal += game[i][0] }
    }

    return runningTotal;
}

module.exports = bowlingScore