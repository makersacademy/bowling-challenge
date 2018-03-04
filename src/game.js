'use strict';

function Game() {
  this.frameList = [];
  this.totalScore = 0;
}

Game.prototype.calculateScore = function() {
  for(var i = 1; i <= this.frameList.length; i++) {
    this.totalScore += this.frameList[0].frameScore;
  };
  return this.totalScore;
};

Game.prototype.roll = function(roll1, roll2) {
  var frame = new Frame(roll1, roll2);
  this.frameList.push(frame);
};
