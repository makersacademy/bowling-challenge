'use strict';

function Game(){
  this.points = []
};

Game.prototype.roll = function(rollPoints) {
  this.points.push(rollPoints)
};

Game.prototype.score = function() {
  var finalScore = 0;
  var pointsIndex = 0;
  for (var frame = 0; frame < 10; frame++) {
    if (this.points[pointsIndex] + this.points[pointsIndex + 1] === 10) {
      finalScore += this.points[pointsIndex] + this.points[pointsIndex + 1] + this.points[pointsIndex + 2];
    }
    else {
      finalScore += this.points[pointsIndex] + this.points[pointsIndex + 1];
    }
    pointsIndex += 2;
  }
  return finalScore;
};
