class Game {

  constructor() {
    this.currentFrame = new Frame();
    this.scorer = new Scorer();
    this.MINPINS = 0;
    this.MAXPINS = 10;
  }

  // User adds a roll to their scorecard
  roll(pins) {
    if (pins < this.MINPINS || pins > this.MAXPINS) {
      throw "Please enter number between 0 and 10";
    } else if (this.currentFrame.pins[0] + pins > this.MAXPINS)
      throw `Please enter number less than ${this.MAXPINS - this.currentFrame.pins[0]}`
    this.currentFrame.add(pins);
    if (this.scorer._spareUpdateNeeded()) {
      this.scorer._spareBonus(pins);
    }
    if (this.currentFrame._isComplete()) {
      this.endAndResetFrame();
    }
  }

  endAndResetFrame() {
    this.scorer.addFrame(this.currentFrame);
    this.currentFrame = new Frame();
  }

  gameover() {
    return this.scorer.total();
  }

  // this return the frame number currently being played
  frameCount() {
    return this.scorer.frames.length + 1
  }

  // identifies if on 1st or 2nd roll of frame. Used in the interface.
  rollCount() {
    if (this.currentFrame.pins.length === 0) {
      return 1;
    } else {
      return 2;
    }
  }

  // helps to identify when final frame is played & gameover
  scoreCount() {
    return this.scorer.scores.length
  }

  _isAtStart() {
    return this.frameCount() === 1
  }

  _isOver() {
    return this.scoreCount() >= this.scorer.MAXFRAMES
  }

}
