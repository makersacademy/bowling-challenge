const MAX_FRAME_INDEX = 9;

function Game(frames = []) {
  this.frames = frames
  this.currentFrameIndex = 0
};

Game.prototype = {
  getFrames: function () {
    return this.frames
  },

  currentFrame: function () {
    return this.frames[this.currentFrameIndex]
  },
  
  addRoll: function (pins) {
    if (this.currentFrame().isFull(this.currentFrameIndex)) {
      if (this.currentFrameIndex === MAX_FRAME_INDEX) { return }
      this.currentFrameIndex++
    }
    this.currentFrame().addRoll(pins)
  },

  score: function () {
    return this.getFrames().reduce(
      (total, frame, i) => total + frame.score() + frame.bonusScore(this.frames[i+1], this.frames[i+2]),
      0
    );
  }
};
