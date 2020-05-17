class ScoreBoard {
  constructor(){
    this.index = 0;
    this.frames = [];
    this._constructFrames();
    this.currentFrame = this.frames[0];
  }

  addScore(number) {
    if (this.currentFrame.isLastFrame()) {
      this._assignLastFrame(number);
    }
    else this._assignFrame(number);

    this._updateScores();
  };

  _assignFrame(number) {
    if (this.currentFrame.hasStrike()) this._nextFrame();

    if (this.currentFrame.first != null) {
      this.currentFrame.secondRoll = number;
      this._nextFrame();
    }
    else {
      this.currentFrame.firstRoll = number;
    };
  };

  _assignLastFrame(number) {
    if(this.currentFrame.first == null){
      this.currentFrame.firstRoll = number
    }
    else if (this.currentFrame.second == null) {
      this.currentFrame.secondRoll = number
    }
    else if (this.currentFrame.third == null) {
      this.currentFrame.thirdRoll = number
    }
  }

  _nextFrame() {
    this.currentFrame = this.frames[this.index += 1];
  };

  _updateScores() {
    for (var i = 0; i < 10; i++) {
      var frame = this.frames[i];
      frame.update();
    };
  };

  _constructFrames() {
    for (var i = 0; i < 10; i++) {
      this.frames.push(new Frame(i));
    };

    for (var i = 0; i < 10; i++) {
      var frame = this.frames[i];
      if (i == 0) {
        frame.nextFrame = this.frames[i + 1];
      } else if (i == 9) {
        frame.prevFrame = this.frames[i - 1];
      } else {
        frame.nextFrame = this.frames[i + 1];
        frame.prevFrame = this.frames[i - 1];
      };
    };
  };
}
