const Game = require('./game')

class ScoreCard {
  constructor(game = (new Game)) {
    this.game = game
  }

  // score game in its current state
  currentScore() {
    const scores = this.frameScore()
    let result = ""
    for (let i = 0; i < scores.length; i++) {
      result += (
        `--------------\nFrame: ${i + 1}\n` +
        `Pins: ${this.pins(this.game.game[i])}\n` +
        `Running Score: ${scores[i]}\n`
      );
    }

    if (this.game.framenum() == 10 && this.game.currentframe().done()) {
      result += (
        `--------------\nFinal Total: ${scores[9]}`
      )
    }
    return result
  }

  // display pins knocked down in a frame
  pins(frame) {
    let pins = `${frame.frame[0]}`
    if (frame.frame.length > 1 && !frame.strike()) {
      pins += `, ${frame.frame[1]}`
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

  // add strike and spare bonus to relevant frames
  addbonus(framescores) {
    for (let i = 0; i < this.game.framenum() - 1; i++) {
      // only get rolls after this frame
      const sliced = this.game.game.slice(i + 1);
      // flatten so rolls can be added regardless of frames they were in
      const flattened = sliced.map((item) => { return item.frame; }).flat();

      if (this.game.game[i].spare()) {
        framescores[i] += flattened[0];
      } else if (this.game.game[i].strike()) {
        framescores[i] += (flattened[0] + flattened[1]);
      }
    }
    return this.totaliser(framescores);
  }

  // totalise scores per frame
  totaliser(bonusadded) {
    let list = [0];
    for (let i = 0; i < this.game.framenum(); i++) {
      list.push(bonusadded[i] + list[i]);
    }
    return list.slice(1);
  }
}

module.exports = ScoreCard;
