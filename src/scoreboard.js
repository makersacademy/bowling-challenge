'use strict';

function Scoreboard(){
  this.firstRoll = 0;
  this.secondRoll = 0;
  this.resultsArray = [];
  this.lastFrameTotal = 0;

}

Scoreboard.prototype.accessFirstRoll = function () {
  return this.firstRoll;
};

Scoreboard.prototype.accessSecondRoll = function () {
  return this.secondRoll;
};

Scoreboard.prototype.accessResultsArray = function () {
  return this.resultsArray;
};

Scoreboard.prototype.accessLastFrameTotal = function () {
  return this.lastFrameTotal;
};
Scoreboard.prototype.recordFirstRoll = function (roll) {
  this.firstRoll = roll;
};

Scoreboard.prototype.recordSecondRoll = function (roll) {
  this.secondRoll = roll;
};

Scoreboard.prototype.recordFrameResults = function() {
  var firstRoll = this.firstRoll;
  var secondRoll = this.secondRoll;
  this.resultsArray.push([firstRoll, secondRoll]);
};

Scoreboard.prototype.sumPreviousFrame = function() {
  var previousFrameArray = this.resultsArray[this.resultsArray.length -2]
  var total = this.lastFrameTotal;
  for(var i=0; i<2; i++){
    total += previousFrameArray[i]
  }
  this.lastFrameTotal = total;
};

Scoreboard.prototype.isSpare = function() {
  return this.lastFrameTotal === 10;
};

Scoreboard.prototype.addSparePoints = function() {
  if (this.isSpare()){
    this.resultsArray[0].push(this.firstRoll);
  }
    return;
};
