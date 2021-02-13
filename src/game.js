class Game {
  constructor() {
    this._rolls = [];
  }

  roll(pins) {
    this._rolls.push(pins);
  }

  score() {
    var result = 0;
    for (var i = 0; i < 20; i++) {
      result += this._rolls[i];
    }
    return result;
  }
}
