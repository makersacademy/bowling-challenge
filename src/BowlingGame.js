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
    for (var i = 0; i < 10; i++) {
      if _isSpare(rollIndex) {
        result += _spareScore(rollIndex);
        return result;
      } else {
        result += this.rolls[rollIndex] + this.rolls[rollIndex + 1];
        return result;
      };
      rollIndex += 1
    };
  };

  _isSpare(rollIndex) {
    this.rolls[rollIndex] + this.rolls[rollIndex + 1] === 10;
  };

  _spareScore(rollIndex) {
    10 + this.rolls[rollIndex + 2];
  };
};
