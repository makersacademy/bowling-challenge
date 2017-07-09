function Game() {
  this.frames = [];
}

Game.prototype.addFrame = function(frame) {
  this.frames.push(frame)
}

Game.prototype.totalGameScore = function() {
  var gameScore = 0
  this.frames.forEach(function(element) {
    gameScore = gameScore + element.score;
  });
  return gameScore
}
