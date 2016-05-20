 // 'use strict';
function Round(){

  this.MAX_BALLS = 2;
  this.PINS = 10;

  this.balls = this.MAX_BALLS;
  this.roundScore = new Array();

};



Round.prototype.roll = function(){

  var roundPinsDown = this.pinsDown();

    if(roundPinsDown >= this.PINS){
      roundPinsDown = this.PINS;
    };

    this.PINS = this.PINS - roundPinsDown;

    if (this.PINS === 0) {
      this.balls = 0;
    }
    else {
      this.balls = this.balls - 1;
    };


  if (this.PINS <= 0) {
    this.PINS = 0;
  };

  this.roundScore.push(roundPinsDown);

};


Round.prototype.pinsDown = function(){
  return (Math.floor(Math.random() *11 ));

};

