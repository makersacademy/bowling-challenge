// const Frame = require('./Frame.js');

class BowlingScorecard {

  constructor() {
    this.frame = 1
    this.frames = [new Frame(this.frame)]
  }

  enterRoll(score) {
    if (this._isInvalidScore(score)) return `Invalid score entered, score must be between 0 and ${this._maxRoll()}.`;

    score = Number(score)
    this._currentFrame().enterRoll(score)
    this._applyBonus()
    if (this._checkFrameOver() === "EndGame") return "End of Game";

    return score
  }

  currentScore() {
    let total = 0
    this.frames.forEach(function(element) {
      total += (element.frameScore)
    })

    return total
  }

  generateScorecardInfo() {
    let thisIs = this
    let results = this.frames.map(function(element) {
      let firstRoll = thisIs._tidyDisplay(element.firstRoll, element.strike)
      let secondRoll = thisIs._tidyDisplay(element.secondRoll, element.strike, element.spare)

      return { frame: element.frame, firstRoll: firstRoll, secondRoll: secondRoll, strike: element.strike, spare: element.spare, total: element.total };
    });
    return results
  }

  _isInvalidScore(score) {
    if (score > this._maxRoll() || score < 0) return true
    if (`${score}`.match(/\D/) !== null) return true

    return false
  }

  _maxRoll() {
    let roll = this._currentFrame().firstRoll
    if (roll !== null) return (10 - roll)

    return 10
  }

  _checkFrameOver() {
    this._updateTotal()

    if (this._currentFrame().isComplete() && this.frame === 10) return "EndGame";

    if (this._currentFrame().isComplete()) {
      this.frame++;
      this.frames.push(new Frame(this.frame, this.currentScore()));
    }
  }

  _currentFrame() {
    return this.frames[this.frames.length - 1]
  }

  _tidyDisplay(roll, strike, spare = false) {
    if (roll === null) {
      return ("");
    } else if (strike) {
      return 'X';
    } else if (spare) {
      return '/'
    } else {
      return roll
    }
  }

  _updateTotal() {
    this._currentFrame().updateCurrentTotal();
  }

  _applyBonus() {
    if (this.frame === 1) return;

    if (this._currentFrame().isFirstRollComplete()) {
      let previousFrame = this.frames[this.frames.length - 2];
      if (previousFrame.spare) {
        previousFrame.frameScore += this._currentFrame().firstRoll;
        previousFrame.total += this._currentFrame().firstRoll;
        this._currentFrame().total += this._currentFrame().firstRoll
      }
    }
  }
}

// module.exports = BowlingScorecard;

// console.log("0".match(/\D/g))
