class Game {
  constructor() {
    this.round = 0;
    this.score = 0;
    this.frames = [];
    this.isSpare = false;
    this.isStrike = false;
  }


  play(frame) {
    this.round += 1;
    this._checkPreviousFrame(frame);
    if (this.round < 10) {
      this._calculateStrike(frame);
      this._calculateSpare(frame);
      this.frames.push(frame);
      this._calculateScore();
    } else if (this.round == 10) {
      this.checkLastFrame(frame);
    } else {
      throw new TypeError('You cannot play more than 10 frames');
    }
  }


  checkLastFrame(frame) {
    // # Roll 1 + Roll 2 < 10
    if (frame.frameScore < 10) {
      this.frames.push(frame);
      this._calculateScore;
      return;
    } // #  Strike at Roll 1 or Spare
    if ((frame.roll1 == 10) || (frame.frameScore == 10)) {
      frame.frameScore += frame.roll3;
      this.frames.push(frame);
      this._calculateScore;
      return;
    }
  }

  _checkPreviousFrame(frame) {
    if (this.isStrike == true) {
      let previousFrame = this.frames[this.frames.length - 1];
      previousFrame.frameScore += (frame.roll1 + frame.roll2);
    } else if (this.isSpare == true) {
      let previousFrame = this.frames[this.frames.length - 1];
      previousFrame.frameScore += frame.roll1;
    }
  }

  _calculateStrike(frame) {
    if (frame.roll1 == 10) {
      this.isStrike = true;
    }else{
      this.isStrike = false;
    }
  }

  _calculateSpare(frame) {
    if ((frame.frameScore == 10) && (frame.roll1 < 10)) {
      this.isSpare = true;
    } else {
      this.isSpare = false;
    }
  }

  _calculateScore() {
    this.score = this.frames.reduce((sum, frame) => sum + frame.frameScore, 0)
  }
}
