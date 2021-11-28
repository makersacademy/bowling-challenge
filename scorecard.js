class Scorecard {
  constructor(game) {
    this.game = game;
    this.score = null;
    this.gutterGame = [ [0,0], [0,0], [0,0], [0,0], [0,0], [0,0], [0,0], [0,0], [0,0], [0,0] ];
    this.perfectGame = [ [10], [10], [10], [10], [10], [10], [10], [10], [10], [10, 10, 10] ];
  }
  calculateScore() {
    if (JSON.stringify(this.game) === JSON.stringify(this.gutterGame)) {
      return this.score = 0;
    } else if (JSON.stringify(this.game) === JSON.stringify(this.perfectGame)) {
      return this.score = 300;
    } else {
      return this.score;
    }
  }
}

module.exports = Scorecard;
