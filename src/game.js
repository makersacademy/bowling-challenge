function Game(){
  this.scores = []
  this.total = 0
  this.currentFrame = []
  this.frameCounter = 0
  this.rollCounter = 0
  this.spare = false
  this.strike = false
};

Game.prototype.inputScore = function(pins) {
  if (this.currentFrame.length == 0) {
    this.currentFrame.push(pins);
    this.strike = this.isStrike()
    if(this.spare) {
      this.total += pins
    }
    if(this.strike) {
      this.scores.push(this.currentFrame)
      this.currentFrame = []
      this.frameCounter += 1
    }
  }
  else if(this.currentFrame.length == 1) {
    this.currentFrame.push(pins);
    frameTotal = this.currentFrame[0] + this.currentFrame[1]
    this.scores.push(this.currentFrame);
    this.spare = this.isSpare()
    this.currentFrame = []
    this.frameCounter += 1
  }
  this.total += pins;
};

Game.prototype.isStrike = function() {
  return this.currentFrame[0] === 10;
}

Game.prototype.isSpare = function() {
  return this.currentFrame[0] + this.currentFrame[1] === 10;
}
