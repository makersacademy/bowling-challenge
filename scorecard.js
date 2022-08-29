const Game = require('./game')

class ScoreCard {
  constructor(game = (new Game)) {
    this.game = game
    this.framescores = [];
    this.totalisers = []
  }

  currentScore() {
    this.frameScore()
    this.addbonus()
    this.totaliser()
    let result = ""
    for (let i = 0; i < this.totalisers.length; i++) {
      result += (
        `--------------\n` +
        `Frame: ${i + 1}\n` +
        `Pins: ${this.pins(this.game.game[i])}\n` +
        `Running Score: ${this.totalisers[i]}\n`
      );
    }

    if (this.game.framenum() == 10 && this.game.currentframe().done()) {
      result += (
        `--------------\n` +
        `Final Total: ${this.totalisers[this.totalisers.length - 1]}`
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
      this.framescores.push(this.game.game[i].score())
    }
  }

  totaliser() {
    this.totalisers = []
    for (let i = 0; i < this.game.framenum(); i++) {
      if (i == 0) {
        this.totalisers.push(this.framescores[i])
      } else {
        this.totalisers.push(this.framescores[i] + this.totalisers[i - 1])
      }
    }
  }

  getframes() {
    let frames = []
    this.game.game.forEach((frame) => { frames.push(frame) })
    return frames
  }

  addbonus() {
    let frames = this.getframes()
    // add spares to this.framescores
    // don't process the last available frame
    for (let i = 0; i < this.game.framenum() - 1; i++) {
      if (frames[i].spare()) {
        // add next roll to all results
        this.framescores[i] += (frames[i + 1].frame[0]);
      }
    }
  }
};

module.exports = ScoreCard;
