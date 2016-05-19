 // 'use strict';
function Round(){

  this.MAX_BALLS = 2;
  this.PINS = 10;

  this.balls = this.MAX_BALLS;

  this.pinsDown = function(){(Math.floor(Math.random() *11 ))};



};

Round.prototype.roll = function(){
  this.PINS = this.PINS - (Math.floor(Math.random() *11 ));
  if (this.PINS === 0) {
     this.balls = 0;
  }
    else {
    this.balls = this.balls - 1;
  };
  return this.PINS


};

