class Scorecard {
  constructor(frames = [new Frame(1)]) {
    this.frames = frames;
  }

  addRoll(pins) {
    let roll = new Roll(pins);
    this._currentFrame().addRoll(roll);
    this._updateFrames();
  }

  calculateScore() {
    // let score = 0
    // this.rolls.forEach(function(roll) {
    //   score += roll.pins
    // })
    // return score
  }
  //

  _updateFrames() {
    console.log(this._currentFrame().number)
    if (this._currentFrame().isComplete() && this._currentFrame().number !== 10) {
      let nextFrameNum = this._currentFrame().number + 1;
      this.frames.push(new Frame(nextFrameNum));
    }
  }

  _currentFrame() {
    return this.frames[this.frames.length - 1];
  }
}