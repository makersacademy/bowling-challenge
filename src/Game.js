class Game {
  constructor() {
    this.isOver = false;
    this.currentRoll = 1;
    this.finalScore = 0;
  };

  bowl(pinsDown) {
    this.currentRoll++;
    this.gameStatus();
  };

  gameStatus() {
    this.currentRoll >= 20 ? this.gameOver(true) : this.gameOver(false);
  };

  gameOver(bool) {
    if(bool === true) { this.isOver = true }
  }
}
