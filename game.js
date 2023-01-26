const Scorecard = require("./scorecard");
const Frame = require("./frame");

class Game {

    constructor () {
        this.scorecard = new Scorecard
        this.frame = new Frame
        this.runningTotal = 0
    }


    addBowl(score) {
        this.#addScoretoFrame(score);
        return this.#runningTotalorGameOver();
    }

    #addScoretoFrame(score) {
        if (this.#gameOver() === false) {
            if (this.frame.bowls.length <= 1) {
                this.frame.bowls.push(score)
                this.scorecard.scorecard.push(this.frame.bowls)
                this.runningTotal += score
            }  else  {
                this.frame = new Frame
                this.frame.bowls.push(score)
                this.runningTotal += score
            }
        }
    }

    #gameOver() {
        if (this.scorecard.scorecard.length === 10) {
            return true
        } else if (this.scorecard.scorecard.length < 10) {
            return false
        }
    }

    #runningTotalorGameOver() {
        if (this.#gameOver() === false) { 
            return this.runningTotal
        } else if (this.#gameOver() === true) {
            return `Game is over! You score ${this.runningTotal}`
        }
    }

}

module.exports = Game;