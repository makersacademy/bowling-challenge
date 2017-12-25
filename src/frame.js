function Frame(){
  this.finalFrame = false;
}

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

Frame.prototype.total = function(){
  if(this.isFinalFrame() && (this.isSpare() || this.isStrike())){
    return this.getRoll(1) + this.getRoll(2) + this.getRoll(3);
  };
  return this.getRoll(1) + this.getRoll(2);
}

Frame.prototype.setFinalFrame = function(){
  this.finalFrame = true;
}

Frame.prototype.isFinalFrame = function(){
  return this.finalFrame;
}
