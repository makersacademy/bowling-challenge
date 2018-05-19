function Frame(){
  this.isComplete = false;
}

Frame.prototype.addScore = function(score){
  if (!this.firstRoll) {
    if (score == 10){ this._strike(); }
    return this.firstRoll = score;
  }
  if (this.bonusBalls) { this.bonusBalls.push(score); }
  else { this.secondRoll = score; }
  this._setComplete();
}

Frame.prototype._calculateScore = function(){
  this.Score = this.firstRoll + this.secondRoll;
}

Frame.prototype._setComplete = function(){
  this.isComplete = true;
  this._calculateScore();
}

Frame.prototype._strike = function(){
  this.isStrike = true;
  this.bonusBalls = [];
}
