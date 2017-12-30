function Game() {

  this.currentFrame = new Frame
  this.frames = [this.currentFrame]


};

Game.prototype.calculateGameScore = function() {
  var finalScore = 0
  this.frames.forEach(function(frame) {
    finalScore += frame.score
  });
  return finalScore
};

Game.prototype.addNewFrame = function() {
  if (this.gameIsOver()) { return }
  this.frames.push(new Frame)
  
};

Game.prototype.gameIsOver = function() {
  return this.frames.length >= 10
};
