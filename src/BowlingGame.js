class BowlingGame {
  constructor() {
    this.rollStorage = []
    this.result = 0
    this.rollIndex = 0
  }
  roll(pins) {
    return this.rollStorage.push(pins)
  }
  score() {
    for (var i = 1; i <= 20; i++) {
      this.result += this.rollStorage[this.rollIndex]
      this.rollIndex += 1
    }
    return this.result
  }
}