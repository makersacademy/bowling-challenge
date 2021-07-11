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
    if (this.rolls.length % 2 == 0) {
      this.frames.push(this.rolls.slice(-2))
    } else if (this._isStrike()) {
      this.frames.push(this.rolls.slice(-1))
      this. rolls = this.rolls.filter(n => n != 10);
    }
    this._currentFrame()
  }

  _isValidScore(roll) {
    return roll <= NUMBER_OF_PINS ? true : false;
  }

  _isStrike() {
    return this.rolls[this.rolls.length -1] === 10 ? true : false;
  }

  reduced(arr) {
    return arr.reduce((num, i) => num = num + i);
  }

  _sortFrames() {
    if (this.frames.length > 0) {
      this.frames.filter(frame => { 
        if (this.reduced(frame) > 10) {
          this.frames.pop();
        };
        frame;
       });
    };
  }

  _currentFrame() {
    this.latestFrame = this.frames[this.frames.length - 1]
  }

  _isNotFinalFrame() {
    return this.frames.length < 10 ? true : false;
  }
}