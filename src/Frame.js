class Frame {
  constructor(index) {
    this.index  = index;
    this.first  = null;
    this.second = null;
    this.third  = null;
    this.prevFrame = null;
    this.nextFrame = null;
  }

  set firstRoll(value) {
    this.first = value;
  }

  set secondRoll(value) {
    this.second = value;
  }

  set thirdRoll(value) {
    if (this.hasSpare() || this.hasStrike()) this.third = value;
  }

  hasSpare() {
    if (this.hasStrike() == false && this.score() == 10) return true;
    return false;
  };

  hasStrike() {
    if (this.first == 10) return true;
    return false;
  };

  score() {
    if (this.prevFrame == null) {
      return this.first + this.second + this.third;
    } else {
      return this.prevFrame.score() + this.first + this.second + this.third;
    }
  };

  displayScore() {
    if (this._canDisplay()) return this.score();
    return "";
  };

  update() {
    if (this.hasStrike()) {
      this.secondRoll = this.nextFrame.first;

      if (this.nextFrame.hasStrike()) {
        this.thirdRoll = this.nextFrame.nextFrame.first;
      } else {
        this.thirdRoll = this.nextFrame.second;
      };
    };

    if (this.hasSpare()) {
      this.thirdRoll = this.nextFrame.first;
    };
  };

  _canDisplay() {
    if (this.hasSpare() || this.hasStrike()) {
      if (this.third) return true;
    } else {
      if (this.first && this.second) return true;
    };
    return false;
  };

  // _lastFrame() {
  //   if (this.index == 9) return true;
  //   return false;
  // };
  //
  // _firstFrame() {
  //   if (this.index == 0) return true;
  //   return false;
  // }
};
