'use strict';

function Ball() {

  this.MAX_THROW = 10;
  this.MIN_THROW = 0;

  this.throw = this.MIN_THROW;
}

Ball.prototype.roll = function () {
  return Math.floor((Math.random() * 10));
};
