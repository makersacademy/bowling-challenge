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
    // exception for strike on 10th frame
    if (frame.tenth && frame.frame[0] == 10) {
      pins = 10
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
    // add the next roll if a spare
    for (let i = 0; i < this.game.framenum() - 1; i++) {
      if (frames[i].spare()) {
        // add next roll to all results
        this.framescores[i] += (frames[i + 1].frame[0]);
      }
    }

    // if a strike
    for (let i = 0; i < this.game.framenum() - 1; i++) {
      if (frames[i].strike()) {
        // find the next two rolls
        // slice off current frame
        const forStrike = frames.slice(i + 1);
        // convert frames to list of pins
        const canFlatten = forStrike.map((item) => { return item.frame; })
        const flattened = canFlatten.flat();
        // add next two rolls
        this.framescores[i] += (flattened[0] + flattened[1]);
      }
    }

  }
};

module.exports = ScoreCard;
