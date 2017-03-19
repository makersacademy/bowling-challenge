'use strict';

function Frame() {
  this.PINS = 10;
  this.pins = this.PINS;
  this.balls = []
}

Frame.prototype.getScore = function () {

};

Frame.prototype.addBall = function (score) {
  this.balls.push(score); 
};
