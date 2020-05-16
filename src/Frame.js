class Frame {
  constructor(index) {
    this.index = index;
    this.turns = 0;
  }

  set firstRoll(value) {
    this.first = value;
    if (this.hasStrike()) this.turns = 2;
  }

  set secondRoll(value) {
    this.second = value;
    if (this.hasSpare()) this.turns = 1;
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
    return this.first + this.second;
  };

  displayScore() {
    if (this.turns == 0) return this.score();
    return "";
  };

};
