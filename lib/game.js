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
    // return this.getFrames().reduce((total, frame) => total + frame.score(), 0);

    total = 0
    this.getFrames().forEach((frame, index) => {
      total += frame.score()
      if (frame.isStrike() === true) { 
        total += this.frames[index + 1].score()
      }
      if (frame.isSpare() === true) { 
        total += this.frames[index + 1].firstRoll()
      }
    });
    return total
  }
};
