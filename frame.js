class Frame {
  constructor(tenth = false) {
    this.frame = []
    this.tenth = tenth
  }

  roll(ball) {
    this.frame.push(ball)
  }

  score() {
    const sum = this.frame.reduce((a, b) => a + b, 0);
    return sum
  }

  done() {
    if (this.tenth && this.donetenth()) {
      return true
    } else if (!this.tenth && (this.strike() || this.frame.length == 2)) {
      return true;
    } else {
      return false;
    }
  }

  donetenth() {
    if ((this.strike() || this.spare()) && this.frame.length == 3) {
      return true;
    } else if (!(this.strike() || this.spare()) && this.frame.length == 2) {
      return true;
    } else {
      return false;
    }
  }

  spare() {
    if (this.frame.length > 1) {
      if (this.frame[0] + this.frame[1] == 10) {
        return true
      } else {
        return false
      }
    } else {
      return false
    }
  }

  strike() {
    if (this.frame[0] == 10) {
      return true
    } else {
      return false
    }
  }
}

module.exports = Frame;
