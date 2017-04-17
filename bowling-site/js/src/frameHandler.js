// manages the play through of a single bowling frame

function FrameHandler(throwerClass, frameTerminatorClass){
  this.thrower= throwerClass;
  this.frameTerminator = frameTerminatorClass;
  this.framesPlayed = 0 ;
  this.startFrame();
}


FrameHandler.prototype.startRound = function(){
  this.preThrowChecks();
  this.throw();
  this.postThrowUpdates();
}

FrameHandler.prototype.preThrowChecks = function(){
  if (this.isComplete){
    throw new TypeError("Frame is over, can't throw")
  }
}

FrameHandler.prototype.throw= function(){
  var throw_result = this._throwBall();
  this._endThrow();
  this.updateScore(throw_result);
}
FrameHandler.prototype.postThrowUpdates = function(){
  if(this._isFrameOver()){
    this._endFrame();
    this._incrementFrameNumber();
  }
  if(this._isNotF10NormalRound()){
    this.thrower.resetPins()
  }
}

FrameHandler.prototype._isNotF10NormalRound = function(){
  var scoreTotal =(this.result.throw1 + this.result.throw2)
  return (this.throwsMade === 2 && scoreTotal >= 10);
}

FrameHandler.prototype._incrementFrameNumber=function(){
  this.framesPlayed ++;
}

FrameHandler.prototype._isFrameOver = function(){
  return this.frameTerminator.isFrameOver(this.currentFrameState());
}

FrameHandler.prototype._endFrame = function (){
  this.isComplete = true;
}

FrameHandler.prototype._endThrow = function(){
  this.throwsMade += 1;
}
FrameHandler.prototype._throwBall = function(){
  return this.thrower.throw();

}

FrameHandler.prototype.currentFrameState = function(){
  var expectedFrameState = {
    framesFinished: this.framesPlayed,
    throwsMade: this.throwsMade,
    throw1: this.result.throw1,
    throw2: this.result.throw2,
    throw3: this.result.throw3
  }
  return expectedFrameState;
}

FrameHandler.prototype.updateScore= function(score){
  var throwsMade = this.throwsMade
  if(throwsMade === 1){
    this.result.throw1 = score;
  }else if (throwsMade === 2){
    this.result.throw2 = score;
  }else {
    this.result.throw3 = score;
  }
}

FrameHandler.prototype.startFrame = function(){
  this._resetThrowerPins();
  this._resetScores();
  this._resetThrowNumber();
  this._resetCompletion();
}

FrameHandler.prototype._resetThrowerPins = function(){
  this.thrower.resetPins();
}

FrameHandler.prototype._resetScores = function(){
  this.result= {
    throw1: NaN,
    throw2: NaN,
    throw3: NaN,
  }
}

FrameHandler.prototype._resetThrowNumber = function(){
  this.throwsMade = 0;
}

FrameHandler.prototype._resetCompletion=function(){
  this.isComplete = false;
}
