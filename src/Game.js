function Game() {
  this.allFrames = [];
  this.currentFrame = new Frame;
  this.runningTotal = 0;
}

Game.prototype.play = function() {
  this.currentFrame.bowl();
  if(this.currentFrame.frameComplete === true) {
    this.allFrames.push(this.currentFrame);
    this._scoreCalculator();
    if(this.allFrames.length > 1) {
    this._spareCalculator();
    }
    this.frameReset();
  }
}

Game.prototype.frameReset = function() {
  this.currentFrame = new Frame;
}

Game.prototype._scoreCalculator = function() {
  this.runningTotal += this.currentFrame.frameTotalScore;
}



Game.prototype._spareCalculator = function () {
  var framesSoFar = this.allFrames.length - 1;
  if(this.allFrames[framesSoFar - 1].wasASpare) {
    this.allFrames[framesSoFar - 1].frameTotalScore += this.currentFrame.frameScores[0];
  }
}
