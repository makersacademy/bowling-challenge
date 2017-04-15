// manages the play through of a single bowling frame

function Frame(ballThrowClass){
  this.isFinished = false;
  this.throwNumber= 1;
  this.pins = 10;
  this.ballThrower= ballThrowClass
}

Frame.prototype.throwBall= function(){
  this._updateThrowPins();
  this._startThrow();
}


Frame.prototype.endFrame = function (){
  this.isFinished = true;
}

Frame.prototype.endThrow = function(){
  this.throwNumber += 1;
}

Frame.prototype.updateScore= function(score){
  if(this.throwNumber === 1){
    this.scoreThrow1 = score;
  }else{
    this.scoreThrow2 = score;
  }
}

Frame.prototype.result = function(){
  return result = {
    score1: this.scoreThrow1,
    score2: this.scoreThrow2
  }
}
Frame.prototype.isReadyForTurn2 = function(){
  return this._isNotStrike();
}

Frame.prototype._isNotStrike = function(){
  return !(this.scoreThrow1 == 10);
}


Frame.prototype._updateThrowPins = function(){
  this.ballThrower.updatePins(this.pins);
}

Frame.prototype._startThrow = function(){
  this.ballThrower.throwBall();
}
