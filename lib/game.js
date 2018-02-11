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

  addRoll: function (pins) {
    var frameNumber = this.currentFrameNo()
    if (this.currentFrame().isFull(frameNumber)) {
      if (frameNumber === MAX_FRAMES) { return } 
      this.addFrame(new Frame())
    }
    this.currentFrame().addRoll(pins)
  },

  score: function () {
    return this.getFrames().reduce(
      (total, frame, index) => total + frame.score() + this.bonusScore(frame, index),
      0
    );
  },

  bonusScore: function (frame, index) {

    if (index === 9) { return 0 }

    nextRolls = this.frames.slice(index+1).reduce((acc, frame) => acc.concat(frame.rolls), []);

    if (frame.isStrike() === true) {
      return nextRolls[0] + nextRolls[1]
    }
    if (frame.isSpare() === true) {
      return nextRolls[0]
    }
    return 0
  }
};
