function Frame(roll1, roll2, roll3){
  this._roll1 = roll1;
  this._roll2 = roll2 || 0;
  this._roll3 = roll3 || 0;
  this._nextFrame = null;
}

Frame.prototype.score = function(){
  var currentScore = this._roll1 + this._roll2;
  if(this._isASpare()){
    currentScore += this._nextFrame._firstRoll();
  }
  if(this._isAStrike()){
    if(this._nextFrame) {
      currentScore += this._nextFrame._nextTwoRolls();
    } else {
      currentScore += (this._roll2 + this._roll3);
    }
  }
  if(this._nextFrame){
    currentScore += this._nextFrame.score();
  }
  return currentScore;
}

Frame.prototype.addNextFrame = function(frame){
  var currentFrame = this;
  var nextFrame = currentFrame._nextFrame;
  while(nextFrame){
    currentFrame = nextFrame;
    nextFrame = currentFrame._nextFrame
  }
  currentFrame._nextFrame = frame;
}

Frame.prototype._isASpare = function(){
  return this._roll1 !== 10 && (this._roll1 + this._roll2 === 10);
}

Frame.prototype._isAStrike = function(){
  return this._roll1 === 10;
}

Frame.prototype._firstRoll = function(){
  return this._roll1;
}

Frame.prototype._nextTwoRolls = function(){
  if(!this._isAStrike()) {
    return this._roll1 + this._roll2;
  } else {
    var r = this._roll1;
    if(this._nextFrame) {
      r += this._nextFrame._roll1;
    }
    return r;
  }
}

