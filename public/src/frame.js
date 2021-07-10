
class Frame {
  constructor(firstRoll, secondRoll) {
    this._firstRoll = firstRoll;
    this._secondRoll = secondRoll;
  }
  frameScore() {
    return this._firstRoll + this._secondRoll;
  }
}