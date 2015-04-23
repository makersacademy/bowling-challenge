
var Frame = function(){
  this.frame_start = 1;
  this.rolls = 2;
};

Frame.prototype.go = function() {
  this.rolls -= 1;
};

var Game = function(){
  this.frame = 10;
};