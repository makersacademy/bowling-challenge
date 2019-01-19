class Game {
  constructor() {
    this.isOver = false;
    this.currentRoll = 1;
    this.finalScore = 0;
  };

  bowl(pinsDown) {
    this.currentRoll++;
    this.status();
  };

  status() {
    this.currentRoll >= 20 ? this.finish(true) : this.finish(false);
  };

  finish(bool) {
    if(bool === true) { this.isOver = true }
  }
}
