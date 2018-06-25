'use strict';

function Scoreboard(){
  this.firstRoll = 0;
  this.secondRoll = 0;
  this.resultsArray = [];
  this.lastFrameTotal = 0;
  this.gameTotal = 0;

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

Scoreboard.prototype.accessGameTotal = function () {
  return this.gameTotal;
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
  var previousFrameArray = this.resultsArray[this.resultsArray.length - 2];
  var total = 0;
  for(var i=0; i<2; i++){
    total += previousFrameArray[i]
  }
  this.lastFrameTotal = total;
};

Scoreboard.prototype.isSpare = function() {
  var lastFrame = this.resultsArray[(this.resultsArray.length) - 2]
  return this.lastFrameTotal === 10 && lastFrame[0]!=10;
};

Scoreboard.prototype.addSparePoints = function() {
  var lastFrame = this.resultsArray[(this.resultsArray.length) - 2]
  if (this.isSpare()){
    lastFrame.push(this.firstRoll);
  }
    return;
};

Scoreboard.prototype.isStrike = function () {
  var lastFrame = this.resultsArray[(this.resultsArray.length) - 2]
  return lastFrame[0] === 10;
};

Scoreboard.prototype.addStrikePoints = function () {
  var lastFrame = this.resultsArray[(this.resultsArray.length) - 2]
  if (this.isStrike()){
    lastFrame.push(this.firstRoll, this.secondRoll);
  }
    return;
};

Scoreboard.prototype.isDoubleStrike = function () {
  var lastFrame = this.resultsArray[(this.resultsArray.length) - 2];
  var lastlastFrame = this.resultsArray[(this.resultsArray.length) - 3];
  return (lastFrame[0] === 10) && (lastlastFrame[0]===10);
};

Scoreboard.prototype.addDoubleStrikePoints = function () {
  var lastlastFrame = this.resultsArray[(this.resultsArray.length) - 3];
  if (this.isDoubleStrike()){
    lastlastFrame.push(this.firstRoll);
  }
  return;
};

Scoreboard.prototype.totalScore = function () {
  var sum = 0;
  for(var i = 0; i < this.resultsArray.length; i++) {
      var frame = this.resultsArray[i];
      for(var j = 0; j < frame.length; j++) {
        sum += frame[j]
      }
  }
      this.gameTotal = sum;
};


Scoreboard.prototype.isEleventhFrame = function () {
  if (this.resultsArray.length === 10 && this.lastFrameTotal === 10){
    

  } else {

  }

};
