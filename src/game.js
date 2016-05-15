
function Game(frame) {
  this.gameFrames = []
  this.score = 0
  this.currentFrame = frame
}

Game.prototype.updateScore = function(frame) {
  this.score += (this.currentFrame.bowlOne() + this.currentFrame.bowlTwo())
  this.addFrame()
  this.currentFrame.endFrame()
};
Game.prototype.addFrame = function(){
  this.gameFrames.push(this.currentFrame)
}
