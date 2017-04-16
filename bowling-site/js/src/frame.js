// manages the play through of a single bowling frame

function Frame(throwerClass){
  this.thrower= throwerClass
  this.start();
}

Frame.prototype.start = function(){
  this._resetThrowerPins();
  this._resetScores();
  this._resetThrowNumber();
  this._resetCompletion();
}

Frame.prototype._resetThrowerPins = function(){
  this.thrower.resetPins();
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

Frame.prototype._resetCompletion=function(){
  this.isComplete = false;
}

Frame.prototype.startRound = function(){
  this.preThrowChecks();
  this.throw();
  this.postThrowUpdates();
}


Frame.prototype.preThrowChecks = function(){
  if (this.isComplete){
    throw new TypeError("Frame is over, can't throw")
  }
}

Frame.prototype.throw= function(){
  var throw_result = this._throwBall();
  this.updateScore(throw_result);

}

Frame.prototype.postThrowUpdates = function(){
  this._endThrow();
  
  if(this._isStrike()){
    this._endFrame();
  }
}


Frame.prototype._endFrame = function (){
  this.isComplete = true;
}

Frame.prototype._endThrow = function(){
  this.throwNumber += 1;
}

Frame.prototype.updateScore= function(score){
  if(this.throwNumber === 1){
    this.result.throw1 = score;
  }else{
    this.result.throw2 = score;
  }
}

Frame.prototype._isStrike = function(){
  return (this.result.throw1 == 10);
}

Frame.prototype._throwBall = function(){
  this.thrower.throw();
}
