class Game {
  constructor() {
    this.score = 0;
    this.frameCounter = 0;
    this.MAX_FRAME = 10;
  }

  bowlFrame(roll1, roll2) {
    if (this.isGameOver()) {
      throw new Error("game over")
    }
    this.Frame = [roll1, roll2]
    this.addScore(roll1, roll2)

    this.isFrameASpare(roll1, roll2)

    ++this.frameCounter
  }

  addScore(roll1, roll2) {
    this.checkLastFrameStatus()
    this.score += (roll1+roll2)
  }

  showScore() {
    return this.score;
  }

  isGameOver() {
    if (this.frameCounter === this.MAX_FRAME) {
      return true
    }
    return false
  }

  isFrameASpare(roll1, roll2) {
    if (roll1 + roll2 === this.MAX_FRAME) {
      this.lastFrameStatus = "spare"
    }
  }

  addSpareScore(lastFrame) {
    this.score += lastFrame[0]
  }

  checkLastFrameStatus() {
    if (this.lastFrameStatus === "spare") {
      this.addSpareScore(this.Frame)
    }
  }
}
