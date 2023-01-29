

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
    getScoreFromJustPlayedFrame = () => this.currentFrameScore.rolls
        .reduce((pv,cv) => pv + cv,0 )
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