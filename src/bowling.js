'use strict';

function Bowling(){
  this.score = 0;
};

Bowling.prototype.bowl = function () {
  var pinsKnockedDown;
  pinsKnockedDown = Math.floor(Math.random() * 11);
  this.score += pinsKnockedDown;
};

Bowling.prototype.score = function () {
  return this.score;
};
