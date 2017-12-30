function Game() {
  this.frames = []
};

Game.prototype.calculateGameScore = function() {
  var finalScore = 0
  this.frames.forEach(function(frame) {
    finalScore += frame.score
  });
  return finalScore
};
