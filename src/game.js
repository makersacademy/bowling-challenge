'use strict';

function Game() {
  this.total_score = 0;
  this.frames = [[],[],[],[],[],[],[],[],[],[]];
  this.current_frame = 1;
  this.turn = 1;
}

Game.prototype.validTurn = function(pins) {
  if ( pins > 10 ) {
    return false;
  } else if ( pins + this.frames[this.current_frame - 1][0] > 10 ) {
    return false;
  }
  return true;
};

Game.prototype.addBowl = function(pins) {
  if ( this.validTurn(pins) === true ) {
    this.frames[this.current_frame - 1].push(pins);
  }
  if ( this.wasStrike() === true ) {
    this.frames[this.current_frame - 1].push(0);
  }
  this.nextFrame();
};

Game.prototype.wasStrike = function() {
  if (this.frames[this.current_frame - 1][0] === 10) {
    return true;
  }
};

Game.prototype.wasSpare = function() {
  if (this.frames[this.current_frame - 1][0] +
      this.frames[this.current_frame - 1][1] === 10 ) {
    return true;
  }
};

Game.prototype.nextFrame = function() { //Look into making this private
  if ( this.frames[this.current_frame - 1].length === 2 ) {
    this.current_frame += 1;
  }
};

Game.prototype.calculateScore = function() {
  var total = 0;
  this.frames.forEach(function(frame) {
    total += frame.reduce((partial_sum, a) => partial_sum + a,0);
  });
  return this.total_score = total;
};
