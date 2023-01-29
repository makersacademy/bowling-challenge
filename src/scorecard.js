import {sumArray} from "./utils.js";

export class Scorecard {
    constructor() {
        this.currentFrameScore = {
            frame: 0,
            bonus: 0,
            rolls: []
        }
        this.frameCount = 0
        this.scorecard = []
    }

    startGame = () => {
//        this.frameCount++
    }
    getScoreFromJustPlayedFrame = () => sumArray(this.currentFrameScore.rolls)
    startFrame = () => {
        this.frameCount++
        this.currentFrameScore = {
            frame: this.frameCount,
            bonus: 0,
            rolls: []
        }
    }
    endFrame = () => {
        if (this.frameCount > 1) {
            if (this?.previousFrameScore && this.previousFrameScore?.rolls[0] === 10) {
                this.scorecard[this.getPreviousArrayLocation()].bonus = this.getScoreFromJustPlayedFrame()
            } else if (this?.previousFrameScore && (sumArray(this.previousFrameScore?.rolls) === 10)) {
                this.scorecard[this.getPreviousArrayLocation()].bonus = this.currentFrameScore.rolls[0]
            }

        }
        this.previousFrameScore = this.currentFrameScore
        this.scorecard.push(this.currentFrameScore)

    }
    rollInput = (item) => this.currentFrameScore.rolls.push(item)

    // below the magic number 2 is taking away 1 for the array location and another 1 for the previous frame
    getPreviousArrayLocation = () => this.frameCount - 2
    getScorecard = () => this.scorecard


}