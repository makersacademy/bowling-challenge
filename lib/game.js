function Game() {
  this.frames = []
};

Game.prototype = {
  getFrames: function () {
    return this.frames
  },

  addFrame: function(frame) {
    this.frames.push(frame)
  },

  score: function() {
    function sumFrames(total, frame) {
      return total + frame.score();
    }
    return this.getFrames().reduce(sumFrames,0);
  }
};
