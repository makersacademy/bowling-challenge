function Game() {
  this.allFrames = [];
  this.currentFrame = new Frame;
  this.runningTotal = 0;
}

Game.prototype.play = function() {
  this.currentFrame.bowl();

  if(this.currentFrame.frameComplete === true) {
    this.allFrames.push(this.currentFrame);
    this.runningTotal += this.currentFrame.frameTotalScore;
    this._scoreCalculator;
    this.frameReset();
  }
}

Game.prototype.frameReset = function() {
  this.currentFrame = new Frame;
}

Game.prototype._scoreCalculator = function() {
  var lastFrame = this.allFrames.length;
  if(this.allFrames[lastFrame -1].wasAStrike && this.allFrames[lastFrame -2].wasAStrike) {
    this.allFrames[lastFrame -2].frameTotalScore += this.currentFrame[0];
  }
}
