class Game {

  constructor() {
    this.currentFrame = new Frame();
    this.scorer = new Scorer();
  }

  roll(pins) {
    if (pins < 0 || pins > 10) {
      throw "Please enter number between 0 and 10";
    } else {
      this.currentFrame.add(pins);
      if (this.currentFrame._isComplete()) {
        this.endAndResetFrame();
      }
    }
  }

  endAndResetFrame() {
    this.scorer.addFrame(this.currentFrame);
    this.currentFrame = new Frame();
  }

  gameover() {
    return this.scorer.total();
  }

}
