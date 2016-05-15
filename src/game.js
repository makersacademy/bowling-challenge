
function Game(frame) {
  this.gameFrame = frame.frameNumber
  this.score = 0
  this.currentFrame = frame
}

Game.prototype.updateScore = function(frame) {
  this.score += (this.currentFrame.bowlOne() + this.currentFrame.bowlTwo())
};
