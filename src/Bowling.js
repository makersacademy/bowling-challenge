'use script';

function Bowling() {
  this.score = 0;
  this.frame = 1;
}

Bowling.prototype.getCurrentScore = function () {
  return this.score;
};

Bowling.prototype.getCurrentFrame = function () {
  return this.frame;
};

Bowling.prototype.add = function (number) {
  this.score += number;
};
