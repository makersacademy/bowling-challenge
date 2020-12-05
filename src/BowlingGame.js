class BowlingGame {

  constructor() {
    this.rolls = [];
  }

  roll(pins) {
    this.rolls.push(pins);
  }

  score() {
    var result = 0;
    var rollIndex = 0;
    for (var i = 0; i < 20; i++) {
      result += this.rolls[rollIndex];
    }
    return result
  }
};
