function Game() {
  this.allFrames = [];
  this.currentFrame = new Frame;
  this.runningTotal = 0;
  this.isGameOver = false;
}

var MAXFRAMES = 10

Game.prototype.play = function() {
  this.currentFrame.bowl();
  if(this.currentFrame.frameComplete === true) {
    this.allFrames.push(this.currentFrame);
    this._scoreCalculator();
    if(this.allFrames.length > 1) {
    this._spareCalculator();
    this._strikeCalculator();
    }
    if(this.allFrames.length > 2) {
      this._doubleStrikeCalculator();
    }
    this.frameReset();
    this._gameOver();
  }
}

Game.prototype.frameReset = function() {
  this.currentFrame = new Frame;
}

Game.prototype._scoreCalculator = function() {
  this.runningTotal += this.currentFrame.frameTotalScore;
}

Game.prototype._spareCalculator = function() {
  var framesSoFar = this.allFrames.length - 1;
  if(this.allFrames[framesSoFar - 1].wasASpare) {
    this.allFrames[framesSoFar - 1].frameTotalScore += this.currentFrame.frameScores[0];
    this.runningTotal += this.currentFrame.frameScores[0];
  }
}

Game.prototype._strikeCalculator = function() {
  var framesSoFar = this.allFrames.length - 1;
  if(this.allFrames[framesSoFar - 1].wasAStrike) {
    this.allFrames[framesSoFar - 1].frameTotalScore += this.currentFrame.frameTotalScore;
    this.runningTotal += this.currentFrame.frameTotalScore;
  }
}

Game.prototype._doubleStrikeCalculator = function() {
  var framesSoFar = this.allFrames.length - 1;
  if(this.allFrames[framesSoFar - 1].wasAStrike && this.allFrames[framesSoFar - 2].wasAStrike) {
    this.allFrames[framesSoFar - 2].frameTotalScore += this.currentFrame.frameScores[0];
    this.runningTotal += this.currentFrame.frameScores[0];
  }
}

Game.prototype._gameOver = function() {
  var framesSoFar = this.allFrames.length - 1;
  if(this.allFrames.length >= MAXFRAMES && !this.extraFrame()) {
    this.isGameOver = true;
  }
  if(this.allFrames.length >= MAXFRAMES + 1 && this.allFrames[framesSoFar - 1].wasASpare) {
    this.isGameOver = true;
  }
}


Game.prototype.extraFrame = function() {
  var framesSoFar = this.allFrames.length - 1;
  return (this.allFrames[framesSoFar - 1].wasAStrike || this.allFrames[framesSoFar - 1].wasASpare);
}
