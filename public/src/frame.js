const NUMBER_OF_PINS = 10

class Frame {
  constructor() {
    this.rolls = [];
    this.frames = [];
    this.latestFrame = 0;
  }

  addRoll(pins) {
    if (this._isValidScore(pins)) {
      this.rolls.push(pins);
      this._addFrame();
      } else { throw new Error('Invalid number of pins'); }
    }

  _addFrame() {
    this.frames.push(this.rolls.slice(-1))
    this._currentFrame()
  }

  _isValidScore(roll) {
    return roll <= NUMBER_OF_PINS ? true : false;
  }

  _isStrike() {
    return this.rolls[this.rolls.length -1] === NUMBER_OF_PINS ? true : false;
  }

  _reduced(arr) {
    return arr.reduce((num, i) => num = num + i);
  }

  _currentFrame() {
    this.latestFrame = this.frames[this.frames.length - 1]
  }
}