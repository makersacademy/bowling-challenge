function Frame(){
  this._firstBall = null;
  this._secondBall = null;
  this.outcome = null;
}

Frame.prototype.isComplete = function(){
  if(this.isAStrike() || this.isASpare() || (this._firstBall !== null && this._secondBall !== null)){
    return true;
  } else {
    return false;
  }
}

Frame.prototype.getOutcome = function(){
  if(!this.isComplete()) {throw "Frame is not complete."}
  if(this.isAStrike()) {this.outcome = "X"}
  else if(this.isASpare()) {this.outcome = "/"}
  else { this.outcome = (this._firstBall + this._secondBall) }
}

Frame.prototype.isAStrike = function(){
  return this._firstBall === 10;
}

Frame.prototype.isASpare = function(){
  if(!this.isAStrike() && this._firstBall + this._secondBall === 10){
    return true;
  } else {
    return false;
  }
}
