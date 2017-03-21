'use strict';

function Player(name) {
  this.name = name;
}

Player.prototype.throwBall = function (frame) {
  var score = Math.round(Math.random() * (10))
  frame.addBall(score);
  return score;
};
