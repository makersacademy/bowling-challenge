'use strict';

function Game() {
  this.totalScore = 0;
  this.frames = [];
}

Game.prototype.calculateScore = function() {
  var total = 0;
  this.frames.forEach(function(frame) {
    total += frame.reduce((partial_sum, a) => partial_sum + a,0);
  });
  this.totalScore = total
};
