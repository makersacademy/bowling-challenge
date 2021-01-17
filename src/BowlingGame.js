class BowlingGame {
  constructor() {
    this.array = []
    this.result = 0
    this.index = 0
  }
  roll(pins) {
    return this.array.push(pins)
  }
  score() {
    for (var i = 1; i <= 10; i++) {
      if (this.isStrike()) {
        this.result += 10 + this.array[this.index + 1] + this.array[this.index + 2]
        this.index += 1
      } else if (this.isSpare()) {
        this.result += this.array[this.index] + this.array[this.index + 1] + this.array[this.index + 2]
        this.index += 2
      } else {
        this.result += this.array[this.index] + this.array[this.index + 1]
        this.index += 2
      }
    }
    return this.result
  }
  isSpare(index) {
    return this.array[this.index] + this.array[this.index + 1] === 10
  }
  spareScore(index) {

  }
  isStrike(index) {
    return this.array[this.index] === 10
  }
}