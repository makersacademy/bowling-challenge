class Frame {
  constructor(index) {
    this.index = index;
    this.turns = 0;
    if (this._lastFrame()) this.third = 0;
  }

  set firstRoll(value) {
    this.first = value;
    if (this.hasStrike()) this.turns = 2;
  }

  set secondRoll(value) {
    this.second = value;
    if (this.hasSpare()) this.turns = 1;
  }

  set thirdRoll(value) {
    if (this._lastFrame() && (this.hasSpare() || this.hasStrike())) {
      this.third = value;
    }
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
    if (this._lastFrame()) return this.first + this.second + this.third;
    return this.first + this.second;
  };

  displayScore() {
    if (this.turns == 0) return this.score();
    return "";
  };

  _lastFrame() {
    if (this.index == 10) return true;
    return false;
  };
};
