function Frame(roll1, roll2){
  this._roll1 = roll1;
  this._roll2 = roll2;
  this._nextFrame = null;
}

Frame.prototype.score = function(){
  var currentScore = this._roll1 + this._roll2;
  if(this._isASpare()){
    currentScore += this._nextFrame._firstRoll();
  }
  if(this._nextFrame){
    currentScore += this._nextFrame.score();
  }
  return currentScore;
}

Frame.prototype.addNextFrame = function(frame){
  this._nextFrame = frame;
}

Frame.prototype._isASpare = function(){
  return this._roll1 !== 10 && (this._roll1 + this._roll2 === 10);
}

Frame.prototype._firstRoll = function(){
  return this._roll1;
}
