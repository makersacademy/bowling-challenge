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
      if (this.array[this.index] + this.array[this.index + 1] === 10)
        this.result += this.array[this.index] + this.array[this.index + 1] + this.array[this.index + 2]
      else
        this.result += this.array[this.index] + this.array[this.index + 1]
      this.index += 2
    }
    return this.result
  }
}