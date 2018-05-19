function Frame(){
  this.firstRoll;
  this.secondRoll;
  this.isComplete = false;
}

Frame.prototype.addScore = function(score){
  if (!this.firstRoll) { return this.firstRoll = score; }
  this.secondRoll = score;
}
