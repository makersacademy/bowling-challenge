"use strict";

function Bowling() {
  this.hello = 'Hello World';
  this.score = 0;
  this.frame = 1;
  this.strikeFrame = 10;

}

Bowling.prototype.returnScore = function() {
  return this.score;
};

Bowling.prototype.returnFrame = function() {
  return this.frame;
};

Bowling.prototype.upScore = function() {
  this.score += 1;
  if (this.frame === 1) {
    this.frame = 2
  } else {
    this.frame = 1
  };
};
