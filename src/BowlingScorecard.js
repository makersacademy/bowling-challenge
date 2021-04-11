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

      if (element.frame === 10) {
        let thirdRoll = thisIs._tidyDisplay(element.thirdRoll, element.strike, element.spare, true)
        return { frame: element.frame, firstRoll: firstRoll, secondRoll: secondRoll, thirdRoll: thirdRoll, strike: element.strike, spare: element.spare, total: element.total };
      }

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
    if (this._currentFrame().isFirstRollComplete() && this.frame === 10) {
      if (this._currentFrame().secondRoll === null) {
        return 10
      }
    } else if (this.frame === 10 && this._currentFrame.firstRoll !== null) {
      if (this._currentFrame().secondRoll === 10) {
        return 10
      } else {
        return 10 - this._currentFrame().secondRoll
      }
    }

    let roll = this._currentFrame().firstRoll
    if (roll !== null) return (10 - roll)

    return 10
  }

  _checkFrameOver() {
    console.log("test" + this._currentFrame().total)
    this._updateTotal()
    console.log("test" + this._currentFrame().total)

    if (this._currentFrame().isComplete() && this.frame === 10) return "EndGame";

    if (this._currentFrame().isComplete()) {
      this.frame++;
      this.frames.push(new Frame(this.frame, this.currentScore()));
    }
  }

  _currentFrame() {
    return this.frames[this.frames.length - 1]
  }

  _tidyDisplay(roll, strike, spare = false, isThirdRoll = false) {
    if (roll === null) {
      return ("");
    } else if (isThirdRoll) {
      return roll
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
    console.log(this._currentFrame().total)
    console.log(this.currentScore())
    if (this.frame === 10 && this._currentFrame().thirdRoll !== null) return;
    console.log(this._currentFrame().total)
    console.log(this.currentScore())

    let previousFrame = this.frames[this.frames.length - 2];


    if (this._currentFrame().isFirstRollComplete()) {
      if (previousFrame.spare || previousFrame.strike) {
        previousFrame.frameScore += this._currentFrame().firstRoll;
        previousFrame.total += this._currentFrame().firstRoll;

        this._currentFrame().total += this._currentFrame().firstRoll
      }
      if (this.frame === 2) return;

      let previousTwoFrame = this.frames[this.frames.length - 3];
      if (previousFrame.strike && previousTwoFrame.strike) {
        previousTwoFrame.frameScore += this._currentFrame().firstRoll;
        previousTwoFrame.total += this._currentFrame().firstRoll;

        previousFrame.total += this._currentFrame().firstRoll;

        this._currentFrame().total += this._currentFrame().firstRoll
      }
    } else if (this._currentFrame().isComplete()) {
      if (previousFrame.strike) {
        previousFrame.frameScore += this._currentFrame().secondRoll;
        previousFrame.total += this._currentFrame().secondRoll;
        this._currentFrame().total += this._currentFrame().secondRoll
      }
    }
  }
}

// module.exports = BowlingScorecard;

// console.log("0".match(/\D/g))
