class ScoreBoard {
  constructor(frames){
    this.frames = frames;
    this.index = 0;
    this.currentFrame = this.frames[this.index];
  }

  addScore(number) {
    if (this.currentFrame.isLastFrame()) {
      this._executeLastFrame(number);
    } else {
      if (this.currentFrame.hasStrike()) this._nextFrame();

      if (this.currentFrame.first != null) {
        this.currentFrame.secondRoll = number;
        this._nextFrame();
      } else {
        this.currentFrame.firstRoll = number;
      };
    }
    this._updateScores();
  };

  _executeLastFrame(number) {
    if(this.currentFrame.first != null) {
      this.currentFrame.secondRoll = number;
    } else {
      this.currentFrame.firstRoll = number;
    }

    if(this.currentFrame.second != null) {
      this.currentFrame.thirdRoll = number;
    }
  }

  _nextFrame() {
    this.currentFrame = this.frames[this.index += 1];
  };

  _updateScores() {
    for (var i = 0; i < 10; i++) {
      frame = this.frames[i];
      frame.update();
    };
  };
}
