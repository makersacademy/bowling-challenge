class Frame {
  constructor(index) {
    this.index  = index
    this.first  = 0;
    this.second = 0;
  }

  hasSpare() {
    if (this.hasStrike() == false && this.score() == 10) return true;
    return false;
  }

  hasStrike() {
    if (this.first == 10) return true;
    return false;
  }

  score() {
    return this.first + this.second;
  }

};
