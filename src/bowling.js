'use strict';

var Bowling = function() {
  this.frameScores = [];
  this.frame = 0;
};

Bowling.prototype.score = function(balls) {
  var total = 0;

  while (this.frameScores.length < 9) {
    if (balls[0] === 10) {
      this.frame = balls.splice(0, 1);
      this.frame.push(balls[0], balls[1]);
    } else if (balls[0] + balls[1] === 10){
      this.frame = balls.splice(0,2);
      this.frame.push(balls[0]);
    } else {
      this.frame = balls.splice(0,2);
    }
    this.frameScores.push(this.frame);
    this.frame = 0;
  }

  this.frameScores.push(balls);
  this.frameScores.forEach(function(frame) {
    frame = frame.reduce(function (acc, curr) {
      return acc + curr;
    });
    total += frame;
  });

  return total;
};
