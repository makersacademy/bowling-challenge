const bowlingScore = (score) => {
    let runningTotal = 0;

    for(let frame of score){
        runningTotal += frame[0]
        runningTotal += frame[1]
    }

    return runningTotal;
}

module.exports = bowlingScore