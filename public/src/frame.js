const NUMBER_OF_PINS = 10

class Frame {
  constructor() {
    this.rolls = [];
    this.frames = [];
  }

  addRoll(pins) {
    if (this._isValidScore(pins)) {
      this.rolls.push(pins);
      this._addFrame();
      } else { return new Error('Invalid number of pins'); }
    }

  _addFrame() {
    if (this.rolls.length % 2 == 0) {
      this.frames.push(this.rolls.slice(-2))
    }
  }

  _isValidScore(roll) {
    return roll <= NUMBER_OF_PINS ? true : false;
  }

  _frameScore() {
    return this.frames[this.frames.length -1].reduce((num, i) => num = num + i);
  }
}