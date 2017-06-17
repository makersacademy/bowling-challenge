'use strict';

function Ball() {

  this.MAX_THROW = 10;
  this.MIN_THROW = 0;

  this.throw = this.MIN_THROW;
}

Ball.prototype.roll = function () {
  this.throw =  Math.floor((Math.random() * 10));
  return this.throw;
};

Ball.prototype.isStrike = function () {
  return this.throw === this.MAX_THROW;
};
