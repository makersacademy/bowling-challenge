class Game {

  constructor() {
    this.currentFrame = [];
    this.scorer = new Scorer();
  }

  roll(pins) {
    if (pins >= 0 && pins <= 10) {
      this.currentFrame.push(pins);
      if (this.currentFrame.length === 2) {
        this.frameComplete = true;
        this.scorer.calculate(this.currentFrame);
        this.currentFrame = [];
      }
    } else {
      throw "Please enter number between 0 and 10";
    }

  }

  gameover() {
    return this.scorer.total();
  }

}
