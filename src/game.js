function Game(){
  this.scores = []
  this.total = 0
  this.currentFrame = []
  this.frameCounter = 0
  this.rollCounter = 0
};

Game.prototype.inputScore = function(pins) {
  if (this.currentFrame.length == 0) { this.currentFrame.push(pins); }
  else if(this.currentFrame.length == 1){
    this.currentFrame.push(pins);
    this.scores.push(this.currentFrame)
    this.currentFrame = []
  }
  this.total += pins;
};
