class Frame {
  constructor(array) {
    this.rolls = array;
  }
  getRolls() {
    return this.rolls;
  }
  isSpare() {
    return this.pins() >= 10;
  }
  pins() {
    return this.rolls.reduce(function(a, b) {
      return a + b;
    });
  }
  isStrike() {
    return this.rolls[0] == 10;
  }
}
