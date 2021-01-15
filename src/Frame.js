class Frame {

  constructor() {
    this.pins = []
  }

  add(pins) {
    this.pins.push(pins);
  }

  _isComplete() {
    return this.pins.length === 2 || this._isaStrike()
  }

  result() {
    return this.pins[0] + this.pins[1]
  }

  _isaStrike() {
    return this.pins[0] === 10
  }

  _isaSpare() {
    return this.result() === 10
  }
}
