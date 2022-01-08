class Game {
  constructor () {
    this.frames = []
  }

  addRolls (roll1, roll2) {
    this.frames.push([roll1, roll2])
  }

  maxTen (roll1, roll2) {
    const result = [roll1, roll2].reduce((p, c) => p + c)
    if (result > 10) {
      return 'Sum of the rolls cannot exceed 10'
    }
  }
}

module.exports = Game
