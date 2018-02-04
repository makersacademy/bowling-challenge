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
    return this.getFrames().reduce((total, frame, index) => total + frame.score() + this.bonusScore(frame, index), 0);
  },

  bonusScore: function(frame, index) {    
    if (frame.isStrike() === true) { 
      return this.frames[index + 1].score()
    } else if (frame.isSpare() === true) { 
      return this.frames[index + 1].firstRoll()
    } else {
      return 0
    }
  }
};
