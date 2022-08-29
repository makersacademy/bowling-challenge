const Game = require('./game')

class ScoreCard {
  constructor(game = (new Game)) {
    this.game = game
    this.framescores = [];
  }

  currentScore() {
    this.frameScore()
    this.addbonus()
    let result = ""
    for (let i = 0; i < this.framescores.length; i++) {
      result += (
        `--------------\n` +
        `Frame: ${i + 1}\n` +
        `Pins: ${this.pins(this.game.game[i])}\n` +
        `Running Score: ${this.framescores[i]}\n`
      );
    }

    if (this.game.framenum() == 10 && this.game.currentframe().done()) {
      result += (
        `--------------\n` +
        `Final Total: ${this.framescores[this.framescores.length - 1]}`
      )
    }
    return result
  }

  pins(frame) {
    let pins = `${frame.frame[0]}`
    if (frame.frame.length > 1) {
      pins += `, ${frame.frame[1]}`
    }
    return pins
  }

  frameScore() {
    this.framescores = []
    for (let i = 0; i < this.game.framenum(); i++) {
      let lastFrame = 0
      if (i > 0) {
        lastFrame = this.framescores[i - 1]
      }
      const thisFrame = this.game.game[i].score()
      this.framescores.push(lastFrame + thisFrame)
    }
  }

  addbonus() {
    let frames = []
    // f this!
  }
};

module.exports = ScoreCard;
