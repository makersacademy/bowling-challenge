var frameNumber = 1;
var totalScore = 0;
var currentScore = 0;
var bonus = 0;
var maxPinsDown = 10;
var firstTry = 0;
var secondTry = 0;
var sumTries = 0;

var Game = function() {
  this.fallenPins = 0;
};

Game.prototype.hitPinsFirstTry = function(n) {
  for(this.fallenPins = 0; this.fallenPins < n; this.fallenPins ++){
  }
  console.log(this.fallenPins + " have been knocked down on first try");
  var firstTry = this.fallenPins;
};

Game.prototype.hitPinsSecondTry = function(n) {
    for(this.fallenPins = 0; this.fallenPins < n; this.fallenPins ++){
  }
  console.log(this.fallenPins + " have been knocked down on the second try");
  var secondTry = this.fallenPins;
};

Game.prototype.sumFirstSecondTries = function() {
  firstTry + secondTry;
  console.log(this.fallenPins + " total");
};

