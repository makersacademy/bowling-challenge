const Scorecard = require("./scorecard");
const Frame = require("./frame");

class Game {

    constructor () {
        this.scorecard = new Scorecard
        this.frame = new Frame
    }


    addBowl(score) {
        this.#addScoretoFrame(score);
    }

    #addScoretoFrame(score) {
        if (this.#gameOver() === true)
            console.log('Game is over!')
        else {
            if (this.frame.bowls.length <= 1) {
                this.frame.bowls.push(score)
                this.scorecard.scorecard.push(this.frame.bowls)
            }  else  {
                this.frame = new Frame
                this.frame.bowls.push(score)
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


}

module.exports = Game;