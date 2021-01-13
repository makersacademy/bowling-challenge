class Game {

  constructor() {
    this.currentFrame = [];
    this.scorer = new Scorer();
  }

  roll(pins) {
    this.currentFrame.push(pins);
    if (this.currentFrame.length === 2) {
      this.frameComplete = true;
      this.scorer.calculate(this.currentFrame);
      this.currentFrame = [];
    }
  }

  gameover() {
    return this.scorer.total();
  }

}
