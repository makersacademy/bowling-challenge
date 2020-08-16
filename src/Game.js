class Game {
  constructor() {
    this.score = 0;
    this.frameCounter = 0;
  }

  bowlFrame(roll1, roll2) {
    if (this.isGameOver()) {
      throw new Error('game over')
    }
    this.addScore(roll1,roll2)
    ++this.frameCounter
    return [roll1, roll2];
  }

  addScore(roll1, roll2) {
    this.score += (roll1+roll2)
  }

  showScore() {
    return this.score;
  }

  isGameOver() {
    if (this.frameCounter === 10) {
      return true
    }
    return false
  }
}
