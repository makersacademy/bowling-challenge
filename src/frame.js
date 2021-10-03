class Frame {
  constructor() {
    this.roll1 = null;
    this.roll2 = null;
    this.frameScore = null;
    this.strike = false;
    this.spare = false;
    this.frameFinished = false;
  }

  bowl() {
    this._roll();

    if (this.frameFinished) {
      this.calculateFrameScore();
      this._endOfFrameMessage();
    }
  }

  calculateFrameScore() {
    if (this.roll2 === null) {
      this.frameScore = this.roll1;
    } else {
      this.frameScore = this.roll1 + this.roll2;
    }
  }

  _roll() {
    if (this.roll1 === null) {
      console.log(`This is frame number ${this.frameNumber}`);
      console.log('First roll of the frame: ');
      this.roll1 = parseInt(window.prompt());
      console.log(`Your first roll: ${this.roll1}.`);
      this._strike();
      this._addRoll1ScoreToPreviousFrames();
    } 
    else if (this.roll1 != null) {
      console.log("Second roll of the frame: ");
      this.roll2 = parseInt(window.prompt());
      console.log(`Your second roll: ${this.roll2}`)
      this.frameFinished = true;
      this._spare();
      // this._tenthFrameBonusRoll();
      this._addRoll2ScoreToPreviousFrames();
    }
  }

  _strike() {
    if (this.roll1 === 10) // && this._frameNumber() === 10) 
    {
      this.strike = true;
      this.frameFinished = true;
    } else if (this.roll1 === 10) {
      this.strike = true;
      this.frameFinished = true;
    }
  }

  _spare() {
    if (this.roll1 + this.roll2 === 10) {
      this.spare = true;
    }
  }

  _endOfFrameMessage() {
    if (this._frameNumber === 10) {
      console.log(`You scored ${this.frameScore} points in your final frame. Your final score was ${Scorecard.currentGame.score()}.`)
    } else {
      console.log(`You scored ${this.frameScore} points this frame.`)
    }
  }

  _addRoll1ScoreToPreviousFrames() {
    if (this._checkPreviousFrameForSpare() || this._checkPreviousFrameForStrike()) {
      Scorecard.currentGame._getPreviousFrame().frameScore += this.roll1;
      if (this._checkPreviousFrameForStrike() && this._check2ndPreviousFrameForStrike()) {
        Scorecard.currentGame._get2ndPreviousFrame().frameScore += this.roll1;
      }
    }
  }

  _addRoll2ScoreToPreviousFrames() {
    if (this._checkPreviousFrameForStrike()) {
      Scorecard.currentGame._getPreviousFrame().frameScore += this.roll2;    
    }
  }

  // _tenthFrameBonusRoll() {
  //   if (this.roll1 === 10 ||)
  // }

  _frameNumber() {
    return Scorecard.currentGame.frames.length;
  }

  _checkPreviousFrameForSpare() {
    if (Scorecard.currentGame._getPreviousFrame() === undefined) {
      return false;
    } else {
      return Scorecard.currentGame._getPreviousFrame().spare;
    }
  }

  _checkPreviousFrameForStrike() {
    if (Scorecard.currentGame._getPreviousFrame() === undefined) {
      return false;
    } else {
      return Scorecard.currentGame._getPreviousFrame().strike;
    }
  }

  _check2ndPreviousFrameForStrike() {
    if (Scorecard.currentGame._get2ndPreviousFrame() === undefined) {
      return false;
    } else {
      return Scorecard.currentGame._get2ndPreviousFrame().strike;
    }
  }
}