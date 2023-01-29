import _ from "lodash"


export class Scorecard {
    constructor() {
        this.currentFrameScore = []
    }

    startGame = () => {

    }
    getScoreFromJustPlayedFrame = () => _.sum(this.currentFrameScore)
    startFrame = () => {

    }
    endFrame = () => {

    }
    rollInput = (item) => this.currentFrameScore.push(item)
}