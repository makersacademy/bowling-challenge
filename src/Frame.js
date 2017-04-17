function Frame() {
  this.pinsremaining = 10;
  this.frameScores = [];
  this.frameTotalScore = 0;
}

Frame.prototype.bowl = function() {
  bowlScore = Math.floor(Math.random() * (this.pinsremaning + 1));
  this.pinsremaining -= bowlScore;
  this.frameScores.push(bowlScore);
  this.frameTotalScore += bowlScore;
}


Frame.prototype._complete = function() {
  if(this.pinsremaining === 0 || this.frameScores.length === 2) {
    return true
  } else {
    return false
  }
}
