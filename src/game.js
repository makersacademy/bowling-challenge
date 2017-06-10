function Game () {
  this.frames = [];
};

Game.prototype.add = function (frame) {
  this.frames.push(frame);
};

Game.prototype.calculateTotalScore = function () {
  var currentTotalScore = 0
  for (var i = 0; i < this.frames.length; i++) {
    currentTotalScore += this.frames[i].score;
  };
  return currentTotalScore
};
