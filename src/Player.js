Player = function(){
  this.pinsLeftInFrame = 0
};

Player.prototype.roll = function() {
  roll = Math.floor((Math.random() * this.pinsLeftInFrame) + 1);
  this.reducePins(roll);
  return roll;
};

Player.prototype.reducePins = function(roll){
  return this.pinsLeftInFrame -= roll
};

Player.prototype.newFrame = function(){
  return this.pinsLeftInFrame = 10
}