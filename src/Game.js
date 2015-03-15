var totalScore = 0;
var bonus;
var maxPinsDown = 10;
var firstTry;
var secondTry;


var Game = function() {
  this.fallenPins = 0;
  this.frameNumber = 1;
};

Game.prototype.hitPinsFirstTry = function(n) {
  for(this.fallenPins = 0; this.fallenPins < n; this.fallenPins ++){
  }
  var firstTry = this.fallenPins;
  if (this.fallenPins == 10) {
    this.frameNumber ++;
    return "Strike";
  }
};

Game.prototype.hitPinsSecondTry = function(n) {
    for(this.fallenPins = 0; this.fallenPins < n; this.fallenPins ++){
  }
  var secondTry = this.fallenPins;
  this.frameNumber ++;
  if (this.fallenPins == 10) {
    return "Spare";
  }
};

Game.prototype.sumFirstSecondTries = function(firstTry,secondTry) {
  this.fallenPins = firstTry + secondTry;
  return this.fallenPins;
};


