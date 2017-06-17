'use strict';

function Frame() {

  this.MAX_PINS= 10;
  this.frame = [];
}

Frame.prototype.getFrameSize = function() {
  return this.frame.length;
};

Frame.prototype.addBall = function(ball) {
  this.frame.push(ball);
};
