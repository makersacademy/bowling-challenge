function Frame(){
  this.MAX_PINS = 10;
  this.scoreRolls = 0;

}

Frame.prototype.roll1 = function(downPins){
  this.scoreRoll1 = downPins;
  if(this.scoreRoll1 === 10){this.frameResult = "Strike"}
};

Frame.prototype.isStrike = function(){
  if(this.frameResult === "Strike"){return true}
};

Frame.prototype.roll2 = function(downPins){
  this.scoreRoll2 = downPins;
  if(this.scoreRoll1 + this.scoreRoll2 === 10){{this.frameResult = "Spare"}}

Frame.prototype.isSpare = function(){
    if(this.frameResult === "Spare"){return true}
};

Frame.prototype.getScoreRolls = function(){
    return this.scoreRolls = this.scoreRoll1 + this.scoreRoll2
};

};
