function Frame(){
  this.firstBall = null;
  this.secondBall = null;
  this.ballTotal = 0;
  this.outcome = null;
}

Frame.prototype.isComplete = function(){
  if(this.isAStrike() || this.isASpare() || (this.firstBall !== null && this.secondBall !== null)){
    return true;
  } else {
    return false;
  }
}

Frame.prototype.getOutcome = function(){
  this.sumOfBalls();
  if(!this.isComplete()) {throw "Frame is not complete."}
  if(this.isAStrike()) {this.outcome = "X"}
  else if(this.isASpare()) {this.outcome = "/"}
  else { this.outcome = (this.firstBall + this.secondBall) }
}

Frame.prototype.sumOfBalls = function(){
  this.ballTotal = this.firstBall + this.secondBall;
}

Frame.prototype.isAStrike = function(){
  return this.firstBall === 10;
}

Frame.prototype.isASpare = function(){
  if(!this.isAStrike() && this.firstBall + this.secondBall === 10){
    return true;
  } else {
    return false;
  }
}

Frame.prototype.addScore = function(score){
  if(this.firstBall === null){
    this.firstBall = score;
  } else {
    this.secondBall = score;
  }
}
