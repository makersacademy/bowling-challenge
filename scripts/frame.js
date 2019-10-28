
class Frame {
  constructor(number) {
    this.number = number
    this.balls = []
    this.score = 0
    this.subTotal = 0
    this.isSpare = false
    this.isStrike = false
    this.isLastFrame = false
    this.remainingPins = 10
    this.checkLastFrame()
    this.initBalls()
  }

  initBalls() {
    this.balls.push(new Ball(1))
    this.balls.push(new Ball(2))
    if (this.isLastFrame) {
      this.balls.push(new Ball(3))
    }
  }

  checkLastFrame() {
    if (this.number === 10) {
      this.isLastFrame = true
    } else {
      this.isLastFrame = false
    }
  }

  maxPins() {
    this.remainingPins = (10 - this.balls[0].pins)
  }
}