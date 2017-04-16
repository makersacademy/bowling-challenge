// manages the play through of a single bowling frame

function FrameHandler(throwerClass){
  this.thrower= throwerClass
  this.startFrame();
}

FrameHandler.prototype.startFrame = function(){
  this._resetThrowerPins();
  this._resetScores();
  this._resetThrowNumber();
  this._resetCompletion();
}

FrameHandler.prototype.startRound = function(){
  this.preThrowChecks();
  this.throw();
  this.postThrowUpdates();
}

FrameHandler.prototype._resetThrowerPins = function(){
  this.thrower.resetPins();
}

FrameHandler.prototype._resetScores = function(){
  this.result= {
    throw1: 0,
    throw2: 0
  }
}

FrameHandler.prototype._resetThrowNumber = function(){
  this.throwNumber = 1;
}

FrameHandler.prototype._resetCompletion=function(){
  this.isComplete = false;
}



FrameHandler.prototype.preThrowChecks = function(){
  if (this.isComplete){
    throw new TypeError("Frame is over, can't throw")
  }
}

FrameHandler.prototype.throw= function(){
  var throw_result = this._throwBall();
  this.updateScore(throw_result);

}

FrameHandler.prototype.postThrowUpdates = function(){
  this._endThrow();

  if(this._isStrike()){
    this._endFrame();
  }
}


FrameHandler.prototype._endFrame = function (){
  this.isComplete = true;
}

FrameHandler.prototype._endThrow = function(){
  this.throwNumber += 1;
}

FrameHandler.prototype.updateScore= function(score){
  if(this.throwNumber === 1){
    this.result.throw1 = score;
  }else{
    this.result.throw2 = score;
  }
}

FrameHandler.prototype._isStrike = function(){
  return (this.result.throw1 == 10);
}

FrameHandler.prototype._throwBall = function(){
  this.thrower.throw();
}
