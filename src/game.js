class Game {
  constructor() {
    this.round = 0;
    this.score = 0;
    this.frames = [];
    this.isSpare = false;
    this.isStrike = false;
  }


  play(currentFrame) {
    this.round += 1;
    this._checkPreviousFrame(currentFrame);
    if (this.round < 10) {
      this._calculateStrike(currentFrame);
      this._calculateSpare(currentFrame);
      this.frames.push(currentFrame);
      this._calculateScore();
    } else if (this.round == 10) {
      this.checkLastFrame(currentFrame);
    } else {
      throw new TypeError('You cannot play more than 10 frames');
    }
  }


  checkLastFrame(currentFrame) {
    // # Roll 1 + Roll 2 < 10
    if (currentFrame.frameScore < 10) {
      this.frames.push(currentFrame);
      this._calculateScore;
      return;
    } // #  Strike at Roll 1 or Spare
    if ((currentFrame.roll1 == 10) || (currentFrame.frameScore == 10)) {
      currentFrame.frameScore += currentFrame.roll3;
      this.frames.push(currentFrame);
      this._calculateScore;
      return;
    }
  }

  _checkPreviousFrame(currentFrame) {
    if (this.isStrike == true) {
      const previousFrame = this.frames[this.frames.length - 1];
      previousFrame.frameScore += (currentFrame.roll1 + currentFrame.roll2);
    } else if (this.isSpare == true) {
      const previousFrame = this.frames[this.frames.length - 1];
      previousFrame.frameScore += currentFrame.roll1;
    }
  }

  _calculateStrike(currentFrame) {
    if (currentFrame.roll1 == 10) {
      this.isStrike = true;
    } else {
      this.isStrike = false;
    }
  }

  _calculateSpare(currentFrame) {
    if ((currentFrame.frameScore == 10) && (currentFrame.roll1 < 10)) {
      this.isSpare = true;
    } else {
      this.isSpare = false;
    }
  }

  _calculateScore() {
    this.score = this.frames.reduce((sum, frame) => sum + frame.frameScore, 0);
  }
}
