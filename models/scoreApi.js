const bowlingScore = require('./bowlingScore')

const scoreApi = (postRequest) => {
    let game = []

    for (let i = 0; i < 9; i++) {
        let frame = []
        let ball1 = parseInt(postRequest[`f${i + 1}-b1`])
        let ball2 = parseInt(postRequest[`f${i + 1}-b2`])

        frame[0] = ball1

        if (ball2) {
            frame[1] = ball2
        } else {
            frame[1] = 0
        }

        game[i] = frame
    }

    let frame10 = []
    frame10[0] = parseInt(postRequest[`f10-b1`])
    frame10[1] = parseInt(postRequest[`f10-b2`])
    frame10[2] = parseInt(postRequest[`f10-b3`])

    game[9] = frame10

    return bowlingScore(game);
}

module.exports = scoreApi;