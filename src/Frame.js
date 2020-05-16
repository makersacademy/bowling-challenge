class Frame {
  constructor(index) {
    this.index = index;

    // Turns until a frames score can be displayed
    this.turns = 0;

    // Allow a third potential throw if lastFrame is true
    if (this._lastFrame()) this.third = 0;
  }

  set firstRoll(value) {
    this.first = value;

    // Add 2 turns if hasStrike
    if (this.hasStrike()) this.turns = 2;
  }

  set secondRoll(value) {
    this.second = value;
    if (this.hasSpare()) this.turns = 1;

    // Reset turns if first roll on last frame does have strike
    if (this._lastFrame() && !this.hasStrike()) this.turns = 0;
  }

  set thirdRoll(value) {
    if (this._lastFrame() && (this.hasSpare() || this.hasStrike())) {

      // Reset turns as this is the last roll of the last frame
      this.turns = 0;

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

  // Only displays frames score when turns reaches 0
  // Ex. A Strike on frame 1 does not display score until 2 more turns(rolls)
  displayScore() {
    if (this.turns == 0) return this.score();
    return "";
  };

  // Returns true if it's the last frame e.g Frame 10
  _lastFrame() {
    if (this.index == 10) return true;
    return false;
  };
};
