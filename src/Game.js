var frame = 1;
var totalScore = 0;
var currentScore = 0;
var bonus = 0;
var maxPinsDown = 10;

var Game = function() {
  this.fallenPins = 0;
};

Game.prototype.hitPins = function(n) {
  for(this.fallenPins = 0; this.fallenPins < n; this.fallenPins ++){
    console.log(this.fallenPins + " pins have been knocked out at the " + n + " turn");
    console.log(game.fallenPins);
  }
};