function Game() {
  this.frames = []
};

Game.prototype = {
  getFrames: function () {
    return this.frames
  },

  currentFrame: function() {
    return this.frames[this.frames.length - 1];
  },

  currentFrameNo: function () {
    return this.frames.length
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

  // works but needs some refactoring
  bonusScore: function (frame, index) {
    if (index === 9) { return 0 }
    nextRolls = this.getFrames().slice(index+1).reduce((acc, frame) => acc.concat(frame.rolls), []);
    if (nextRolls[0] == null || nextRolls[1] == null) { return 0 }
    if (frame.isStrike()) {
      return nextRolls[0] + nextRolls[1]
    }
    if (frame.isSpare()) {
      return nextRolls[0]
    }
    return 0
  }
};
