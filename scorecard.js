const Game = require('./game')

class ScoreCard {
  constructor(game = (new Game)) {
    this.game = game
  }

  currentScore() {
    const scores = this.frameScore()
    let result = ""
    for (let i = 0; i < scores.length; i++) {
      result += (
        `--------------\n` +
        `Frame: ${i + 1}\n` +
        `Pins: ${this.pins(this.game.game[i])}\n` +
        `Running Score: ${scores[i]}\n`
      );
    }

    if (this.game.framenum() == 10 && this.game.currentframe().done()) {
      result += (
        `--------------\n` +
        `Final Total: ${scores[scores.length - 1]}`
      )
    }
    return result
  }

  // display pins knocked down in a frame
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

  // score each frame without strike or spare bonus
  frameScore() {
    let list = []
    for (let i = 0; i < this.game.framenum(); i++) {
      list.push(this.game.game[i].score())
    }
    return this.addbonus(list)
  }

  // totalise scores per frame
  totaliser(bonusadded) {
    let list = [0]
    for (let i = 0; i < this.game.framenum(); i++) {
      list.push(bonusadded[i] + list[i])
    }
    return list.slice(1)
  }

  getframes() {
    let frames = []
    this.game.game.forEach((frame) => { frames.push(frame) })
    return frames
  }

  // add strike and spare bonus to relevant frames
  addbonus(framescores) {
    let frames = this.getframes()
    // add the next roll if a spare
    for (let i = 0; i < this.game.framenum() - 1; i++) {
      if (frames[i].spare()) {
        // add next roll to all results
        framescores[i] += (frames[i + 1].frame[0]);
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
        framescores[i] += (flattened[0] + flattened[1]);
      }
    }
    return this.totaliser(framescores)
  }
};

module.exports = ScoreCard;
