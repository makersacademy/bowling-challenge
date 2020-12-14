/*jshint esversion: 6 */
class BowlingGame {

  constructor() {
    this.rolls = [];
  }

  roll(pins) {
    this.rolls.push(pins);
  }

  score() {
    var result = 0;
    var rollIndex = 0;
    for (var i = 0; i < 10; i++) {
      if (this._isStrike(rollIndex)) {
        result += this._strikeScore(rollIndex);
        rollIndex += 1;
      } else if (this._isSpare(rollIndex)) {
        result += this._spareScore(rollIndex);
        rollIndex += 2;
      } else {
        result += this._frameScore(rollIndex);
        rollIndex += 2;
      }
    }
    return result;
  }

  frameNumber() {
    var rollIndex = 0;
    var frameNumber = 1;
    console.log(this.rolls);
    for (var i = 0; i < this.rolls.length; i++) {
      console.log('in for loop');
      console.log('printing rollIndex next');
      console.log(rollIndex);
      if (this._isStrike(rollIndex)) {
        rollIndex += 1;
        frameNumber += 1;
      } else {
        rollIndex += 1;
        frameNumber += 0.5;
      }
    }
    console.log(frameNumber);
    return frameNumber;
  }

  _isSpare(rollIndex) {
    return (this.rolls[rollIndex] + this.rolls[rollIndex + 1] === 10);
  }

  _isStrike(rollIndex) {
    return this.rolls[rollIndex] === 10;
  }

  _strikeScore(rollIndex) {
    return (10 + this.rolls[rollIndex + 1] + this.rolls[rollIndex + 2]);
  }

  _spareScore(rollIndex) {
    return (10 + this.rolls[rollIndex + 2]);
  }

  _frameScore(rollIndex) {
    return (this.rolls[rollIndex] + this.rolls[rollIndex + 1]);
  }
}

module.exports = BowlingGame;
