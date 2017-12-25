function Frame(){}

Frame.prototype.setRoll = function(roll, score){
  this["roll"+roll.toString()] = score;
}

Frame.prototype.getRoll = function(roll){
  return this["roll"+roll.toString()]
}

Frame.prototype.isSpare = function(){
  return ((this.getRoll(1) + this.getRoll(2)) === 10) && (!this.isStrike());
}

Frame.prototype.isStrike = function(){
  return this.getRoll(1) === 10
}
