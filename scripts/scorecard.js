
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
    ball.pins = pins
    this.updateBoxValue()
  }

  frameScores() {
    let cumalativeTotal = 0
    for (let i = 0; i <= 9; i += 1) {
      let frame = this.frames[i]
      cumalativeTotal += frame.score 
      frame.subTotal = cumalativeTotal
    }
    this.totalScore = cumalativeTotal
  }

  updateBoxValue() {
    for (let i = 0; i <= 9; i += 1) { //9 frames zero indexed
      let frame = this.frames[i]
      let ball1 = frame.balls[0]
      let ball2 = frame.balls[1]
      let ball3 = frame.balls[2]

      if (ball1.pins === null) {
        ball1.boxString = ''
        ball2.boxString = ''
        console.log(`break of loop - frameID: ${i}`)
        break // end loop if frame not yet played
      }

      if (ball1.pins === 10) {
        // STRIKE
        ball1.boxString = 'X'
        ball2.boxString = '-'
        ball1.isSkipped = false
        ball2.isSkipped = true
        frame.score = 10 // TODO plus next two ball
        this.currFrameID = i + 1
        this.currBallID = 0 // zero indexed
        console.log('Next Frame')
        // START OF FRAME TEN
        if (frame.number === 10) {
          this.currFrameID = i
          ball2.isSkipped = false
          ball2.isFillBall = true
          ball3.isSkipped = false
          ball3.isFillBall = true
          
          if (ball2.pins === null) {
            this.currBallID = 1 // zero indexed
            console.log('FR10: ball 2 ready')
            break
          } else {
            this.currBallID = 2 // zero indexed
            console.log('FR10: ball 3 ready')
          }
          
          if (ball2.pins !== null && ball3.pins === null) {
            ball2.boxString = `${ball2.pins}`
            break
          }
          
          if (ball2 === 10 && ball3 === 10) {
            // Final Frame 2 x STRIKES
            ball2.boxString = `X`
            ball3.boxString = `X`
            frame.score = 30
          } else if (ball2 === 10 && ball3 !== 10) {
            // Final Frame STRIKE on ball2
            ball2.boxString = `X`
            ball3.boxString = `${ball3.pins}`
            frame.score = 20 + ball3.pins
          } else if (ball2 !== 10 && ball3 === 10) {
            // Final Frame STRIKE on ball3
            ball2.boxString = `${ball2.pins}`
            ball3.boxString = 'X'
            frame.score = 20 + ball2.pins
          } else if (ball2 + ball3 === 10){
            // Final Frame SPARE
            ball2.boxString = `${ball2.pins}`
            ball3.boxString = `/`
            frame.score = 20
          } else {
            ball2.boxString = `${ball2.pins}`
            ball3.boxString = `${ball3.pins}`
            frame.score = ball2.pins + ball3.pins
          }
        } // END OF FRAME TEN
      
      } else if (ball1.pins + ball2.pins === 10) {
        // SPARE
        this.currFrameID = i + 1
        this.currBallID = 0 // zero indexed
        console.log('Next Frame')
        ball1.boxString = `${ball1.pins}`
        ball2.boxString = '/'
        ball1.isSkipped = false
        ball2.isSkipped = false
        frame.score = 10 // TODO plus next ball
        if (frame.number === 10) {
          this.currFrameID = i
          this.currBallID = 2 // zero indexed
          console.log('ball 3 ready')
          ball3.isSkipped = false
          ball3.isFillBall = true
          if (ball3 === 10) {
            ball3.boxString = 'X'
            frame.score = 20
          } else {
            ball3.boxString = `${ball3.pins}`
            frame.score = 10 + ball3.pins
          }
        }
      } else if (ball1.pins !== null && ball2.pins === null) {
        // Ball1 played, but Ball2 not yet played
        this.currFrameID = i
        this.currBallID = 1 // zero indexed
        console.log('ball 2 ready')
        ball1.boxString = `${ball1.pins}`
        ball2.boxString = ''
        ball1.isSkipped = false
        frame.score = ball1.pins
      } else if (ball1.pins !== null && ball2.pins !== null){
        // Both Ball1 & Ball2 played
        this.currFrameID = i + 1
        this.currBallID = 0 // zero indexed
        console.log('Next Frame')
        ball1.boxString = `${ball1.pins}`
        ball2.boxString = `${ball2.pins}`
        ball1.isSkipped = false
        ball2.isSkipped = false
        frame.score = ball1.pins + ball2.pins
      } else {
        console.log("Edgecase I've yet to catch")
      }
      this.frameScores()
      console.log(`Frame Score: ${frame.score}`)
      console.log(`Frame SubTotal: ${frame.subTotal}`)
      console.log(`Total Score: ${this.totalScore}`)
    }
  }
}
