class Game {
  constructor() {
    this.rolls = [];
  }

  roll(pins) {
    this.rolls.push(pins);
  }

  score() {
    var result = 0;
    for (var i = 0; i < 20; i++) {
      result += this.rolls[i];
    }
    return result;
  }
}
