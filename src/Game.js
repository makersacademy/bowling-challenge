'use strict';

function Game() {
  this.scorecard = [];
  this.framescomplete = 0;
};

function Frame() {
  this.scorecard = [];
};

Frame.prototype.firstRoll = function(pins) {
  var a = this.scorecard;
  if(pins > 10) {
    throw new Error('only 10 pins standing');
  }
  else if(pins = 10) {
    a.push(pins);
    a.push(0);
  }
  else {
    a.push(pins);
  };
};

Frame.prototype.secondRoll = function(pins) {
  var a = this.scorecard;
  if(pins > this.pinsRemaining()) {
    throw new Error('more than pins remaining');
  }
  else {
    a.push(pins);
  };
};

Frame.prototype.isSpare = function() {
  var a = this.scorecard;
  if(a[0]=10) {
    return false;
  }
  else if((a[0] + a[1]) = 10) {
    return true;
  }
  else {
    return false;
  };
};

Frame.prototype.isStrike = function() {
  var a = this.scorecard;
  if(a[0]=10) {
    return true;
  }
  else {
    return false;
  };
};

Frame.prototype.pinsRemaining = function() {
  var a = this.scorecard;
  if(a === []) {
    return 10;
  }
  else {
    return (10 - a[0]);
  };
};

Game.prototype.addFrame = function(frame) {
  var a = this.scorecard;
  var b = frame.scorecard;
  if(frame.length != 2) {
    throw new Error('frame is not valid');
  }
  else {
    a.push(b);
  };
  this.framescomplete++
};
