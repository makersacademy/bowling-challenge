function Frame(){
  this.isComplete = false;
  this.rollScores = [];
}

Frame.prototype.addScore = function(score){
  if (this.score) { return }
  if (this.rollScores.length === 0 && score === 10) { this.isStrike = true; }
  this.rollScores.push(score);
  this._checkComplete();
}

Frame.prototype.isSpare = function(){
  return (this.rollScores[0] + this.rollScores[1]) === 10;
}

Frame.prototype._checkComplete = function(){
  if (this.isStrike || this.rollScores.length >= 2 ) { this.isComplete = true; }
  if (this._hasAllRolls()){ this._calculateFinalScore(); }
}

Frame.prototype._calculateFinalScore = function(){
  this.score = this.rollScores.reduce(function(acc, val) { return acc + val; });
}

Frame.prototype._hasAllRolls = function(){
  return (((!!this.isStrike || this.isSpare()) && this.rollScores.length < 3) ||
   (this.rollScores.length < 2)) ? false : true;
}
