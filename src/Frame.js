function Frame() {
  this.pinsremaining = 10;
  this.currentFrame = [];
}

Frame.prototype.bowl = function() {
  bowlScore = Math.floor(Math.random() * 11);
  this.pinsremaining -= bowlScore;
  this.currentFrame.push(bowlScore)
}


Frame.prototype._complete = function() {
  if(this.pinsremaining === 0 || this.currentFrame.length === 2) {
    return true
  } else {
    return false
  }
}
