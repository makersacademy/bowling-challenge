class Scorecard {
  constructor() {
    this._pinsKnocked = []
  };

  inputRoll(number) {
    this._pinsKnocked.push(number)
  };

  pinsKnocked() {
    return this._pinsKnocked
  }

};