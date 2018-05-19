function Frame(){
  this.isComplete = false;
}

Frame.prototype.addScore = function(score){
  if (!this.firstRoll) { return this.firstRoll = score; }
  this.secondRoll = score;
  this._calculateScore.call(this);
}

Frame.prototype._calculateScore = function(){
  this.Score = this.firstRoll + this.secondRoll;
}
