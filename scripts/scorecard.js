
class Scorecard {
  constructor(player) {
    this.player = player
    this.frames = []
    this.frameNum = 1 // 1-10
    this.ballNum = 1 // 1-2 OR 1-3 in frame 10
    this.totalScore = 0
    this.isLastFrame = false
    this.isGutterGame = false
    this.isPerfectGame = false
    this.init()
  }

  init() {
    for (let i = 1; i <= 10; i += 1) {
      this.frames.push(new Frame(i))
    }
  }

  addScore(pins, ball = this.ballNum, frame = this.frameNum) {
    this.frames[this.frameNum - 1].addBall(pins, ball)
    this.updateBallNum()
  }

  isLastBallOfFrame() {
    this.ballNum !== 1
  }

  updateBallNum() {
    if (this.ballNum > 1 && this.frameNum < 10) {
      this.nextFrame()
      console.log('Next Frame')
    }
    this.ballNum = this.frames[this.frameNum - 1].currentBall
  }

  nextFrame() {
    this.frameNum += 1
    if (this.frameNum === 10) {
      this.isLastFrame = true
    }
  }

  scoreStrike() {

  }

  scoreSpare() {

  }

}
