
class Bowling {
  constructor() {
    this.frames = [];
    this.currentFrame = 0;
  }

  addFrame(frame, rolls) {
    this.frames.push(frame);
    if(this.frames[this.frames.length -2] == 10) {
      this._spareChecker(rolls);
    };
  }
  score() {
    return this.frames.reduce((num, i) => num = num + i);
  }
  _spareChecker(frame) {
    this.frames[this.frames.length -2] += frame.rolls[frame.rolls.length -2];
  }
}