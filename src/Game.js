// controls the flow of the game
requireRelative('Frame')
function Game() {}

Game.prototype.startGame = function() {
  this.scoreArray = [];
  this.frameNumber = 1;
};

Game.prototype.addToScoreArray = function(score) {
  this.scoreArray.push(Frame.frameScore);
};

Game.prototype.nextFrame = function() {
  if (this.frameNumber >= 11) throw "Too many frames"
  this.frameNumber += 1;
};
