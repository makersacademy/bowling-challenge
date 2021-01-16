class BowlingGame {
  constructor() {
    this.rollStorage = []
  }
  roll(pins) {
    return this.rollStorage.push(pins)
  }
}