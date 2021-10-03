class Frame {
  constructor(attributes) {
    this.frameNumber = attributes["frameNumber"];
    this.currentFrame = attributes["currentFrame"];
    this.followingFrameOne = attributes["followingFrameOne"];
    this.followingFrameTwo = attributes["followingFrameTwo"];
    this.frameTotal = 0;
  }

  calculateFrameTotal() {
    if (this.frameNumber === 10) {
      this._calculateLastFrame();
    } else {
      this._sumCurrentFrame();
      this._isStrike(this.currentFrame) && this._handleStrike();
      this._isSpare(this.currentFrame) && this._handleSpare();
    }
  }

  _calculateLastFrame() {
    if (this._isStrikeOrSpare()) {
      this.frameTotal +=
        this.currentFrame[0] + this.currentFrame[1] + this.currentFrame[2];
    } else {
      this.frameTotal += this.currentFrame[0] + this.currentFrame[1];
    }
  }

  _isStrikeOrSpare() {
    return (
      this.currentFrame[0] + this.currentFrame[1] === 10 ||
      this.currentFrame[0] === 10
    );
  }

  _sumCurrentFrame() {
    this.frameTotal += this.currentFrame.reduce(
      (firstScore, secondScore) => firstScore + secondScore,
      0
    );
  }

  _handleStrike() {
    if (this._isStrike(this.followingFrameOne)) {
      this.frameTotal += this.followingFrameOne[0] + this.followingFrameTwo[0];
    } else {
      this.frameTotal += this.followingFrameOne[0] + this.followingFrameOne[1];
    }
  }

  _handleSpare() {
    this.frameTotal += this.followingFrameOne[0];
  }

  _isStrike(frame) {
    return frame.length === 1;
  }

  _isSpare(frame) {
    return frame[0] + frame[1] === 10;
  }
}
