var frameNumber = 1;
var totalScore = 0;
var bonus;
var maxPinsDown = 10;
var firstTry;
var secondTry;


var Game = function() {
  this.fallenPins = 0;
};

Game.prototype.hitPinsFirstTry = function(n) {
  for(this.fallenPins = 0; this.fallenPins < n; this.fallenPins ++){
  }
  var firstTry = this.fallenPins;
  if (this.fallenPins == 10) {
    this.frameNumberFunction();
  }
};

Game.prototype.hitPinsSecondTry = function(n) {
    for(this.fallenPins = 0; this.fallenPins < n; this.fallenPins ++){
  }
  var secondTry = this.fallenPins;
};

Game.prototype.sumFirstSecondTries = function(firstTry,secondTry) {
  this.fallenPins = firstTry + secondTry;
  return this.fallenPins;
};//

Game.prototype.frameNumberFunction = function () {
  this.frameNumber++;
  return this.frameNumber;
};

