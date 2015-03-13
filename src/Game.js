var frame = 1;
var totalScore = 0;
var currentScore = 0;
var bonus = 0;
var fallenPins = 0;
var maxPinsDown = 10;

var Game = function() {
  this.fallenPins = 0;
};

Game.prototype.hitPins = function(n) {
  for(fallenPins = 0; n <= maxPinsDown; n ++ 1){
    fallenPins ++;
  console.log(fallenPins + " pins have been knocked out");
  }
};