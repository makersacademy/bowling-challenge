function Frame(index){
  this.MAX_PINS = 10;
  this.scoreRolls = 0;
  this.index = index;
  this.finalScore = 0;
  this.scoreRoll1 = 0;
  this.scoreRoll2 = 0;
}

Frame.prototype.isStrike = function(){
  if(this.frameResult === "Strike") {return true}
};

Frame.prototype.hasBonus = function(){
  return this.isStrike() || this.isSpare()
};

Frame.prototype.isFirst = function(){
  return this.index === 0
};

Frame.prototype.isSpare = function(){
  if(this.frameResult === "Spare") {return true}
};

Frame.prototype.getScoreRolls = function(){
  return this.scoreRoll1 + this.scoreRoll2
};

Frame.prototype.isLast = function(){
  if(this.index === 9){return true}
}
