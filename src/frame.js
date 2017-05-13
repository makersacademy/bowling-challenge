function Frame() {
  this.roll1 = 0;
  this.roll2 = 0;

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

Frame.prototype.score = function(nextFrame = new Frame(), nextNextFrame = new Frame()) {

  if(this._isStrike() && nextFrame._isStrike()){
    return (this.total() + nextFrame.total() + nextNextFrame.total() )
  }

  else if(this._isStrike()){
    return (this.total() + nextFrame.total());
  }
  else if(this._isSpare()){
    return (this.total() + nextFrame.roll1);
  }
  else {
    return this.total();
  }
};
