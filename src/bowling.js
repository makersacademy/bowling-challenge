
var Game = function(){
  this.frame = 10;
  this.rolls = 2;
};

Game.prototype.go = function() {
  this.rolls -= 1;
};