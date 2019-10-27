
class Scorecard {
  constructor(player) {
    this.player = player
    this.frames = []
    this.currFrameID = 0 // zero indexed 0-9
    this.currBallID = 0 /// zero indexed 0-2 (2 in last frame)
    this.totalScore = 0 // 0-300
    this.fillBallStrike = false
    this.fillBallSpare = false
    this.isGutterGame = false
    this.isPerfectGame = false
    this.initFrames()
  }

  initFrames() {
    for (let i = 1; i <= 10; i += 1) {
      this.frames.push(new Frame(i))
    }
  }
  
  addRoll(pins, ballNum = null, frameNum = null) {
    if (ballNum === null) {
      var ballID = this.currBallID
    } else {
      var ballID = (ballNum - 1)
    }

    if (frameNum === null) {
      var frameID = this.currFrameID
    } else {
      var frameID = (frameNum - 1)
    }

    let ball = this.frames[frameID].balls[ballID]
    console.log('adding: ' + ball.number)
    ball.pins = pins
    this.updateBoxValue(frameID, ballID)
    this.nextTurn()
  }
  
  nextTurn() {
    let frame = this.frames[this.currFrameID]
    let ball = frame.balls[this.currBallID]
    if (ball.number >= 2 && frame.number === 10) {
      // TODO Last Frame
    } else if (ball.number === 2 && frame.number !== 10) {
      this.nextFrame()
      console.log('Next Frame')
    } else if (ball.number === 1 && frame.isStrike) {
      let nextBall = frame.balls[(this.currBallID + 1)]
      nextBall.skip()
      this.nextFrame()
    } else {
      this.nextBall()
    }
  }

  nextBall() {
    this.currBallID += 1
  }

  nextFrame() {
    this.currBallID = 1
    this.currFrameID += 1
  }

  updateBoxValue() {
    for (let i = 0; i <= 9; i += 1) { //9 frames zero indexed
      let frame = this.frames[i]
      let ball1 = frame.balls[0]
      let ball2 = frame.balls[1]
      let ball3 = frame.balls[2]

      if (frame.number === 10) {
        return frame
      }

      if (ball1.pins === null) {
        ball1.boxString = ''
        ball2.boxString = ''
        break // end loop if frame not yet played
      }

      if (ball1.pins === 10) {
        // STRIKE
        ball1.boxString = 'X'
        ball2.boxString = '-'
        ball1.isSkipped = false
        ball2.isSkipped = true
        if (frame.number === 10) {
          ball2.isSkipped = false
          ball2.isFillBall = true
          ball3.isSkipped = false
          ball3.isFillBall = true
        }
      } else if (ball1.pins + ball2.pins === 10) {
        // SPARE
        ball1.boxString = `${ball1.pins}`
        ball2.boxString = '/'
        ball1.isSkipped = false
        ball2.isSkipped = false
        if (frame.number === 10) {
          ball3.isSkipped = false
          ball3.isFillBall = true
        }
      } else if (ball2.pins === null) {
        // Ball2 not yet played
        ball1.boxString = `${ball1.pins}`
        ball2.boxString = ''
        ball1.isSkipped = false
      } else {
        ball1.boxString = `${ball1.pins}`
        ball2.boxString = `${ball2.pins}`
        ball1.isSkipped = false
        ball2.isSkipped = false
      }
    }
  }
}
