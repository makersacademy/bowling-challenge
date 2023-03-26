class Frame {
  constructor() {
    this.roll1 = null;
    this.roll2 = null;
    this.roll3 = null;
    this.tenthFrame = false;
    this.bonusPoints = 0;
  }

  getRoll1() {
    return this.roll1;
  }

  getRoll2() {
    return this.roll2;
  }

  getRoll3() {
    return this.roll3;
  }

  isTenthFrame() {
    return this.tenthFrame;
  }

  setTenthFrame() {
    this.tenthFrame = true;
  }

  addRoll(roll) {
    if (roll > 10) {
      throw "Maximum score of 10 allowed";
    }

    if (this.roll1 === null) {
      this.roll1 = roll;
    } else if (this.roll2 === null) {
      if (this.roll1 + roll > 10 && this.tenthFrame === false) {
        throw "Maximum score of 10 allowed";
      } else {
        this.roll2 = roll;
      }
    } else {
      if (this.tenthFrame === false) {
        throw "More than 2 rolls not allowed";
      } else {
        this.roll3 = roll;
      }
    }
  }

  isSpare() {
    if (this.roll2 != null && this.roll1 + this.roll2 === 10) {
      return true;
    } else {
      return false;
    }
  }

  isStrike() {
    if (this.roll1 === 10) {
      return true;
    } else {
      return false;
    }
  }

  isRegularFrameComplete() {
    if (this.tenthFrame) {
      return false;
    } else if (this.isStrike()) {
      return true;
    } else if (this.roll1 != null && this.roll2 != null) {
      return true;
    } else {
      return false;
    }
  }

  isTenthFrameComplete() {
    if (this.tenthFrame) {
      if (this.roll3 != null) {
        return true;
      } else if (this.isSpare() || this.isStrike()) {
        return false;
      } else if (this.roll2 != null) {
        return true;
      } else {
        return false;
      }
    } else {
      return false;
    }
  }

  isComplete() {
    if (this.isRegularFrameComplete() || this.isTenthFrameComplete()) {
      return true;
    } else {
      return false;
    }
  }

  getFrameScore() {
    let score = this.roll1;
    if (this.roll2 != null) {
      score += this.roll2;
    }
    if (this.roll3 != null) {
      score += this.roll3;
    }
    if (this.bonusPoints != null) {
      score += this.bonusPoints;
    }
    return score;
  }

  addBonusPoints(points) {
    this.bonusPoints += points;
  }
}

module.exports = Frame;
