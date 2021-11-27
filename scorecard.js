class Scorecard {
  constructor(game) {
    this.game = game
    this.score = null
    this.gameGutter = [ [0,0], [0,0], [0,0], [0,0], [0,0], [0,0], [0,0], [0,0], [0,0], [0,0] ];
    this.gamePerfect = [ [10], [10], [10], [10], [10], [10], [10], [10], [10], [10, 10, 10] ];
  }
  calculateScore() {
  return this.score = 0
  }
}

module.exports = Scorecard;