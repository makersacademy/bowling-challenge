function Game() {
  this.frames = [];
};

Game.prototype.newGame = function() {
  this.frames = [];
};

Game.prototype.play = function () {
  this.frames.push('first play')
  // delgates to frame class to begin adding the score
};

Game.prototype.isGameFinished = function() {
  return this.frames.length === 10 ? "Game has finished!" : "Next frame"
  // will check if final frame has strike or spare and bowl again.
};
