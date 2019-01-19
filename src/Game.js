class Game {
  constructor() {
    this.isOver = false;
    this.currentRoll = 1
  }

  roll(pinsDown) {
    this.currentRoll++
  }
}
