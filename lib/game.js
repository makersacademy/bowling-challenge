function Game() {
  this.frames = [];
  MAX_FRAMES = 10;
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
      (total, frame, i) => total + frame.score() + frame.bonusScore(this.frames[i+1], this.frames[i+2]),
      0
    );
  }
};
