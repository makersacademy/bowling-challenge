// manages the play through of a single bowling frame

function FrameHandler(throwerClass, frameTerminatorClass){
  this.thrower= throwerClass
  this.frameTerminator = frameTerminatorClass
  this.frameNumber = 0
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

FrameHandler.prototype.postThrowUpdates = function(){
  this._endThrow();
  if(this._isFrameOver()){
    this._endFrame();
    this._incrementFrameNumber();
  }
}
FrameHandler.prototype._resetThrowerPins = function(){
  this.thrower.resetPins();
}

FrameHandler.prototype._resetScores = function(){
  this.result= {
    throw1: 0,
    throw2: 0,
    throw3: 0,
  }
}

FrameHandler.prototype._resetThrowNumber = function(){
  this.throwsMade = 0;
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


FrameHandler.prototype._incrementFrameNumber=function(){
  this.frameNumber ++;
}

FrameHandler.prototype._isFrameOver = function(){
  return this.frameTerminator.isFrameOver(this.currentFrameState());
}

FrameHandler.prototype.currentFrameState = function(){
  var expectedFrameState = {
    framesFinished: this.frameNumber,
    throwsMade: this.throwsMade,
    throw1: this.result.throw1,
    throw2: this.result.throw2,
    throw3: this.result.throw3
  }
  return expectedFrameState;
}


FrameHandler.prototype._endFrame = function (){
  this.isComplete = true;
}

FrameHandler.prototype._endThrow = function(){
  this.throwsMade += 1;
}

FrameHandler.prototype.updateScore= function(score){
  var throwsMade = this.throwsMade
  if(throwsMade === 0){
    this.result.throw1 = score;
  }else if (throwsMade === 1){
    this.result.throw2 = score;
  }else {
    this.result.throw3 = score;
  }

}

FrameHandler.prototype._throwBall = function(){
  return this.thrower.throw();

}
