class Game {
  constructor() {
    this.frames = []
  }

  roll(pins) {
    this.frames.push(pins)
  }

  score() {
    var total = 0
    for(var i = 0; i < 20; i++) {
      total += this.frames[i]
    }
    return total
  }
}
