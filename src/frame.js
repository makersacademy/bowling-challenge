function Frame() {
  this.roll1 = 0;
  this.roll2 = 0;
  this.total = this.roll1 + this.roll2;


this.firstRoll = function(ballOneScore){
  this.roll1 = ballOneScore;
};

this.secondRoll = function(ballTwoScore){
  this.roll2 = ballTwoScore;
};

this.total = function(){
  return this.roll1 + this.roll2;
};
}

Frame.prototype._isStrike = function(){
  return this.roll1 === 10;
};

Frame.prototype._isSpare = function(){
  return !this._isStrike() && this.total() === 10;
};
