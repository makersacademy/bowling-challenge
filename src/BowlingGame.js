class BowlingGame{

  constructor() {
    this.rolls = [];
  }

  roll(pins) {
    this.rolls.push(pins);
  }
  score() {
    let result = 0;
    let rollIndex = 0;
      for (var i = 0; i < 10; i++) {
        if (this.rolls[rollIndex] + this.rolls[rollIndex+1] === 10) {
          result += this.rolls[rollIndex] + this.rolls[rollIndex+1] + this.rolls[rollIndex+2]
        } else {
          result += this.rolls[rollIndex] + this.rolls[rollIndex+1]
        }
        rollIndex += 2
      }
    return result
  }
}
