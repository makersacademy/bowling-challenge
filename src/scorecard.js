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
        if (this.frameCount === 10) {
            throw("You cannot start another Frame until you start a new game")
        }
        this.frameCount++
        this.currentFrameScore = {
            frame: this.frameCount,
            bonus: 0,
            rolls: []
        }
    }
    endFrame = () => {
        this.scorecard.push(this.currentFrameScore)
        if (this.frameCount === 10) {
            if (this.isfirstRollATen()) {
                this.scorecard[this.getPreviousArrayLocation()].bonus = this.currentFrameScore.rolls[0] + this.currentFrameScore.rolls[1]
            } else if (this.areFirstTwoRollsATen()) {
//                this.scorecard[this.getPreviousArrayLocation()].bonus = this.currentFrameScore.rolls[0]
            }
            return;
        }
        if ((this.frameCount > 1)) {
            if (this.isfirstRollATen()) {
                this.scorecard[this.getPreviousArrayLocation()].bonus = this.getScoreFromJustPlayedFrame()
            } else if (this.areFirstTwoRollsATen()) {
                this.scorecard[this.getPreviousArrayLocation()].bonus = this.currentFrameScore.rolls[0]
            }
        }

        this.previousFrameScore = this.currentFrameScore
    }
    rollInput = (item) => this.currentFrameScore.rolls.push(item)

    // below the magic number 2 is taking away 1 for the array location and another 1 for the previous frame
    getPreviousArrayLocation = () => this.frameCount - 2
    getScorecard = () => this.scorecard

    getScorecardTotal = () => this.scorecard.reduce((pv, cv) => {
        let {
            bonus,
            rolls
        } = cv
        let subTotalScore = bonus + sumArray(rolls)
        pv += subTotalScore
        return pv
    }, 0)
    getFrameCount = () => this.frameCount

    isfirstRollATen = () => this?.previousFrameScore && this.previousFrameScore?.rolls[0] === 10

    areFirstTwoRollsATen = () => this?.previousFrameScore && (sumArray(this.previousFrameScore?.rolls) === 10)
}