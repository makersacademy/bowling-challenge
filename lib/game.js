class Game {
  constructor () {
    this.frames = []
  }

  addRolls (roll1, roll2) {
    const result = [roll1, roll2].reduce((p, c) => p + c)
    if (result > 10) {
      console.log('Sum of the rolls cannot exceed 10')
      return
    } else {
      this.frames.push([roll1, roll2])
    }
  }
}

module.exports = Game
