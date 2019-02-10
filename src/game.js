'use strict';

function Game(){
  this.points = []
};

Game.prototype.roll = function(roll_points) {
  this.points.push(roll_points)
};

Game.prototype.score = function() {
  var result = 0
  for (var i = 0; i < 20; i++) {
    result += this.points[i]
  }
  return result;
};
