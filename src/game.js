class Game {
  constructor() {
    this._rolls = [];
  }

  roll(pins) {
    this._rolls.push(pins);
  }

  score() {
    var result = 0;
    var index = 0;

    for (var i = 0; i < 10; i++) {
      if (this._rolls[index] === 10) {
        result +=
          this._rolls[index] + this._rolls[index + 1] + this._rolls[index + 2];
        index += 1;
      } else if (this._rolls[index] + this._rolls[index + 1] === 10) {
        result +=
          this._rolls[index] + this._rolls[index + 1] + this._rolls[index + 2];
        index += 2;
      } else {
        result += this._rolls[index] + this._rolls[index + 1];
        index += 2;
      }
    }
    return result;
  }
}
