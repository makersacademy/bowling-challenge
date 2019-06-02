/* eslint-disable prefer-arrow-callback */
/* eslint-disable func-names */
class Game {
  constructor() {
    this.frames = [];
  }

  roll(roll) {
    let frame = new Frame(roll);
    this.frames.push(frame);
  }

  score() {
    return this.frames.reduce(function (score, frame, index, frames) {
      return score + frame.total(frames[index + 1], frames[index + 2]);
    }, 0);
  }
}
