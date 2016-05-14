function Frame(){

}

Frame.prototype.recordFirstRoll = function(score){
  this.firstRoll = score;
}

Frame.prototype.firstRollScore = function(){
  return this.firstRoll;
}

Frame.prototype.recordSecondRoll = function(score){
  this.secondRoll = score;
}

Frame.prototype.secondRollScore = function(){
  return this.secondRoll;
}
;
Frame.prototype.isStrike = function(){
  return this.firstRoll === 10;
}

Frame.prototype.isSpare = function(){
  if (!this.isStrike() && (this.firstRollScore() + this.secondRollScore()) === 10) {
    return true;
  } else {
    return false;
  }
}

Frame.prototype.isFinished = function(){
  if (this.isSpare() || this.isStrike()){
    return true;
  } else if (typeof this.firstRoll === "number" && typeof this.secondRoll === "number") {
    return true;
  } else {
    return false;
  }
}