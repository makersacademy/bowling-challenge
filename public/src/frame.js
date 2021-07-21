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
    return this.rolls[this.rolls.length -1] === 10 ? true : false;
  }

  _reduced(arr) {
    return arr.reduce((num, i) => num = num + i);
  }

  _sortFrames() {
    if (this.frames.length > 0) {
      this.frames.filter(frame => { 
        if (this._reduced(frame) > 10) {
          this.frames.pop();
        };
        frame;
       });
    };
  }

  _currentFrame() {
    this.latestFrame = this.frames[this.frames.length - 1]
  }

  interfaceRolls() {
    return ['#roll1', '#roll2', '#roll3', '#roll4', '#roll5', '#roll6', '#roll7', 
    '#roll8', '#roll9', '#roll10', '#roll11', '#roll12', '#roll13', '#roll14', '#roll15', 
    '#roll16', '#roll17', '#roll18', '#roll19', '#roll20'];
  }
}