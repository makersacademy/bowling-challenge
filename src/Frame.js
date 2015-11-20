function Frame(roll1, roll2, roll3){
  this._roll1 = roll1;
  this._roll2 = roll2 || 0;
  this._roll3 = roll3 || 0;
  this._nextFrame = null;
}

Frame.MAX_PINS = 10;

Frame.create = function(roll1, roll2, roll3){
  var frameType = Frame;
  if(roll1 == Frame.MAX_PINS){
    frameType = StrikeFrame;
  } else if(roll1 + roll2 == Frame.MAX_PINS) {
    frameType = SpareFrame;
  }
  return new frameType(roll1, roll2, roll3);
}

Frame.prototype.score = function(){
  var currentScore = this._roll1 + this._roll2;
  if(this._nextFrame){
    currentScore += this._nextFrame.score();
  }
  return currentScore + this._bonus();
}

Frame.prototype._bonus = function(){
  return 0;
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

Frame.prototype._firstRoll = function(){
  return this._roll1;
}

Frame.prototype._nextFrameFirstRoll = function(){
  if(this._nextFrame) {
    return this._nextFrame._firstRoll();
  }
  return 0;
}

Frame.prototype._nextTwoRolls = function(){
  return this._roll1 + this._roll2;
}

