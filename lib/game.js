class Game {
  constructor() {
    this.frames = []
  }

  addRolls(roll1, roll2) {
    this.frames.push([roll1, roll2])
    console.log(this.frames)
  }
}

module.exports = Game;