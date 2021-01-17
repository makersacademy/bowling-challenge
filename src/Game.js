class Game {

  constructor() {
    this.currentFrame = new Frame();
    this.scorer = new Scorer();
  }

  roll(pins) {
    if (pins < 0 || pins > 10) {
      throw "Please enter number between 0 and 10";
    } else if (this.currentFrame.pins[0] + pins > 10)
      throw `Please enter number less than ${10 - this.currentFrame.pins[0]}`
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

  frameCount() {
    return this.scorer.frames.length + 1
  }

  rollCount() {
    if (this.currentFrame.pins.length === 0) {
      return 1;
    } else {
      return 2;
    }
  }

  scoreCount() {
    return this.scorer.scores.length
  }

  _isAtStart() {
    return this.scorer.frames.length === 0
  }

}
