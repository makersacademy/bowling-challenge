// manages the play through of a single bowling frame

function Frame(){
  this.isFinished = false;
  this.throwNumber= 1;
  this.pins = 10;
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

Frame.prototype.isReadyForTurn2 = function(){
  return this._isNotStrike();
}

Frame.prototype._isNotStrike = function(){
  return !(this.scoreThrow1 == 10);
}
