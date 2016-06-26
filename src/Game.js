var Game = function(){
  this.rolls = [];
};

Game.prototype.roll = function(pins) {
  this.rolls.push(pins);
};

Game.prototype.score = function() {
  return 0;
};