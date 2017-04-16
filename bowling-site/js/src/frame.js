// manages the play through of a single bowling frame

function Frame(ballThrowClass){
  this.isFinished = false;
  this.throwNumber= 1;
  this.thrower= ballThrowClass
  this._resetScores();
}

Frame.prototype.start = function(){
  this.thrower.resetPins()
  this._resetScores();
  this._resetThrowNumber();
}


Frame.prototype._resetScores = function(){
  this.result= {
    throw1: 0,
    throw2: 0
  }
}

Frame.prototype._resetThrowNumber = function(){
  this.throwNumber = 1;
}

Frame.prototype.throwBall= function(){
  this._resetThrowPins();
  var throw_result = this._startThrow();
  this.updateScore(throw_result);
}


Frame.prototype.endFrame = function (){
  this.isFinished = true;
}

Frame.prototype.endThrow = function(){
  this.throwNumber += 1;
}

Frame.prototype.updateScore= function(score){
  if(this.throwNumber === 1){
    this.result.throw1 = score;
  }else{
    this.result.throw2 = score;
  }
}


Frame.prototype.isReadyForTurn2 = function(){
  return this._isNotStrike();
}

Frame.prototype._isNotStrike = function(){
  return !(this.result.throw1 == 10);
}


Frame.prototype._resetThrowPins = function(){
  this.thrower.resetPins();
}

Frame.prototype._startThrow = function(){
  this.thrower.throwBall();
}
