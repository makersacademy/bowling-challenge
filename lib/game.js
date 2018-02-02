function Game() {
  this.frames = []
};

Game.prototype = {
  getFrames: function () {
    return this.frames
  },

  addFrame: function(frame) {
    this.frames.push(frame)
  }
};