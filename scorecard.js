const Game = require('./game')

class ScoreCard {
  constructor(game = (new Game)) {
    this.game = game
    this.framescores = [];
  }

  currentScore() {
    this.frameScore()
    let result = ""
    for (let i = 0; i < this.framescores.length; i++) {
      result += (
        `--------------\n` +
        `Frame: ${i + 1}\n` +
        `Score: ${this.framescores[i]}\n`
      );
    }
    const sum = this.framescores.reduce((a, b) => a + b, 0);
    result += (
      `--------------\n` +
      `Game Total: ${sum}`
    )
    return result
  }

  frameScore() {
    this.framescores = []
    for (let i = 0; i < this.game.framenum(); i++) {
      this.framescores.push(this.game.game[i].score())
    }
  }

};

module.exports = ScoreCard;
