class Game {
  constructor() {
    this.scores = []
  }  


  score() {
    let total = 0
    for (let i = 0; i < 20; i++) {
      total += this.scores[i]
    }
    return total
  }

  bowl(pins) {
    this.scores.push(pins)
  }
}


