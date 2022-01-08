class Frame {
  constructor() {
    this.scores = new Array;
    this.updated = false;
    this.final = 0;
    this.added = false;
  }

  isSpare() {
    if (this.scores.length == 2) {
      return this.isSumTen();
    } else {
      return false;
    }
  }

  isStrike() {
    if (this.scores.length < 3) {
      return this.scores[0] == 10;
    } else {
      return false;
    }
  }

  isUpdatedSpare() {
    return this.scores[0] + this.scores[1] == 10;
  }

  Update() {
    if (this.isUpdatedSpare() || this.scores[0] == 10) {
      if (this.scores.length == 3) {
        this.updated = true;
        this.final = this.scores.reduce((a, b) => a + b, 0);
      }
    } else {
      if (this.scores.length == 2) {
        this.updated = true;
        this.final = this.scores.reduce((a, b) => a + b, 0);
      }
    }
  }

  isExtraRoll() {
    if (this.scores[1] == 10 || this.isSumTen()) {
      return true;
    }
    return false;
  }

  isSumTen() {
    var sum = this.scores.reduce((a, b) => a + b, 0);
    return sum === 10;
  }
}