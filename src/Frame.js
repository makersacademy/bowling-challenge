function Frame() {
  this.pinsremaining = 10;
  this.frameScores = [];
  this.frameTotalScore = 0;
  this.wasAStrike = false;
  this.wasASpare = false
}

Frame.prototype.bowl = function() {
  var bowlScore = Math.floor(Math.random() * (this.pinsremaining + 1));
  this.pinsremaining -= bowlScore;
  this.frameScores.push(bowlScore);
  this.frameTotalScore += bowlScore;
  this._isFrameAStrike();
  this._isFrameASpare();
}


Frame.prototype._isComplete = function() {
  if(this.pinsremaining === 0 || this.frameScores.length === 2) {
    return true
  } else {
    return false
  }
}

Frame.prototype._isFrameAStrike = function() {
  if(this.frameScores.length === 1 && this.frameTotalScore === 10) {
    this.wasAStrike = true
  } else {
    this.wasAStrike = false
  }
}

Frame.prototype._isFrameASpare = function() {
  if(this.frameScores.length === 2 && this.frameTotalScore === 10) {
    this.wasASpare = true
  } else {
    this.wasASpare = false
  }
}
