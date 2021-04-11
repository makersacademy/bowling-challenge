// const Frame = require('./Frame.js');

class BowlingScorecard {

  constructor() {
    this.frame = 1
    this.frames = [new Frame(this.frame)]
  }

  enterRoll(score) {
    if (this._isInvalidScore(score)) return "Invalid score entered, score must be between 0 and 10.";
    score = Number(score)
    this._currentFrame().enterRoll(score)
    this._checkFrameOver()
    return score
  }

  generateScorecardInfo() {
    let results = this.frames.map(function(element) {
      let firstRoll = element.firstRoll
      if (firstRoll === null) {
        firstRoll = ""
      }
      let secondRoll = element.secondRoll
      if (secondRoll === null) {
        secondRoll = ""
      }
      return { frame: element.frame, firstRoll: firstRoll, secondRoll: secondRoll };
    });
    return results
  }

  _isInvalidScore(score) {
    if (score > 10 || score < 0) return true
    if (`${score}`.match(/\D/) !== null) return true

    return false
  }

  _checkFrameOver() {
    if (this._currentFrame().isComplete()) {
      this.frame++;
      this.frames.push(new Frame(this.frame));
    }
  }

  _currentFrame() {
    return this.frames[this.frames.length - 1]
  }
}

// module.exports = BowlingScorecard;

// console.log("0".match(/\D/g))
