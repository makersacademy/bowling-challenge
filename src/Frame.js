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
    if (this.first + this.second == 10) return true;
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
    if (this.isLastFrame()) return;

    if (this.hasStrike()) {
      this._checkBonusRolls();
    };

    if (this.hasSpare()) {
      this.thirdRoll = this.nextFrame.first;
    };
  };

  isLastFrame() {
    if (this.index == 9) return true;
    return false;
  };

  _checkBonusRolls() {
    this.secondRoll = this.nextFrame.first;
    if (this.nextFrame.hasStrike()) {
      if (this.index == 8) {
        this.thirdRoll = this.nextFrame.second;
      }
      else {
        this.thirdRoll = this.nextFrame.nextFrame.first;
      };
    }
    else {
      this.thirdRoll = this.nextFrame.second;
    };
  }

  _canDisplay() {
    if (this.hasSpare() || this.hasStrike()) {
      if (this.third) return true;
    } else {
      if (this.first != null && this.second != null) return true;
    };
    return false;
  };

};
