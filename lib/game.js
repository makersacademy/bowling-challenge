function Game() {
  this.frames = []
};

Game.prototype = {
  getFrames: function () {
    return this.frames
  },

  addFrame: function (frame) {
    this.frames.push(frame)
  },

  score: function () {
    return this.getFrames().reduce(
      (total, frame, index) => total + frame.score() + this.bonusScore(frame, index),
      0
    );
  },

  bonusScore: function (frame, index) {

    if (index === 9) { return 0 }

    nextRolls = this.frames.slice(index).reduce((acc, cur) => acc.concat(cur.rolls), []);

    if (frame.isStrike() === true) {
      return nextRolls[1] + nextRolls[2]
    }
    if (frame.isSpare() === true) {
      return nextRolls[2]
    }
    return 0
  }
};
