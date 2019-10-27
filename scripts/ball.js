
class Ball {
  constructor(ballNum, pins = null, isFillBall = false, isSkipped = false) {
    this.ballNum = ballNum
    this.pins = pins
    this.isSkipped = isSkipped //where first ball of frame was a strike
    this.isFillBall = isFillBall // for tenth frame
    this.boxString = ''
  }

  skip () {
    this.isSkipped = true
    this.boxString = '-'
  }
}
