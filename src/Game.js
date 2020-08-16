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
    this.frame = [roll1, roll2]
    this.addScore(roll1, roll2)

    this.isFrameASpareOrStrike(roll1, roll2)

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

  isFrameASpareOrStrike(roll1, roll2) {
    if (roll1 === this.MAX_FRAME) {
      this.lastFrameStatus = "strike"
    }
    else if (roll1 + roll2 === this.MAX_FRAME) {
      this.lastFrameStatus = "spare"
    }
  }

  addSpareScore(lastFrame) {
    this.score += lastFrame[0]
  }

  addStrikeScore(frame) {
    this.score += frame[0]
    if (lastFrame[0] === 10) {
      // this.score += the next frame also
    }
    else {
      this.score += frame[1]
    }
  }

  checkLastFrameStatus() {
    if (this.lastFrameStatus === "strike") {
      this.addStrikeScore(this.frame)
    }
    else if (this.lastFrameStatus === "spare") {
      this.addSpareScore(this.frame)
    }
  }
}
