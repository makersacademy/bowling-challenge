class Game {
  constructor(frame = new Frame(), scorecard = new Scorecard()) {
    this._frame = frame
    this._scorecard = scorecard
  }

  roll(score) {
    this.invalidInput(score)

    if(this._currentRoll() === 1) {
      this.firstRollProcedure(score)
    } 
    else {
      this.secondRollProcedure(score)
    }
  } 

  firstRollProcedure(score) {
    scorecard.addToScorecard(this._currentFrame(), score)
    if(score === 10 && (this.strike() || this.spare())) {
      frame.addFrame()
      scorecard.addScore(10) 
    } else if (this.spare()) {
      scorecard.addScore(score)
      frame.nextRoll()
    } else if(score === 10) {
      frame.addFrame()
    } else {
      frame.nextRoll()
    }
  }

  secondRollProcedure(score) {
    scorecard.addToScorecard(this._currentFrame(), score)
    if(this.strike()) {
      let doubleScore = (this._frameScore(this._currentFrame()))
      scorecard.addScore(doubleScore)
      frame.nextRoll()
    } else {
      frame.nextRoll()
    } 
  }

  invalidInput(score) {
    if((this._currentRoll() === 1) && (score > 10)) {
      throw new Error('Invalid input, please try again.');
    } 
    else if((this._currentRoll() === 2 && (this._frameScore(this._currentFrame()) + score)) > 10 ) {
      throw new Error('Invalid input, please try again.');
    } 
  }

  _currentRoll() {
    return frame.currentRoll()
  }

  _frameScore(frame) {
    return scorecard.getFrameScore(frame)
  }

  _currentFrame() {
    return frame.currentFrame()
  }

  strike() {
    return scorecard.strike(this._currentFrame())
  }

  spare() {
    return scorecard.spare(this._currentFrame())
  }
}

