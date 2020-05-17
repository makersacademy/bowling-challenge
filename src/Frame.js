class Frame {
  constructor(index) {
    this.index  = index;
    this.first  = null;
    this.second = null;
    this.third  = null;
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
    return this.first + this.second + this.third;
  };

  displayScore() {
    if (this._canDisplay()) return this.score();
    return "";
  };

  _canDisplay() {
    if (this.hasSpare() || this.hasStrike()) {
      if (this.third) return true;
    } else {
      if (this.first && this.second) return true;
    }
    return false;
  }

  _lastFrame() {
    if (this.index == 10) return true;
    return false;
  };

  _firstFrame() {
    if (this.index == 1) return true;
    return false;
  }
};
