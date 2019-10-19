'use strict';

function Game() {
  this.total_score = 0;
  this.frames = [[],[],[],[],[],[],[],[],[],[]];
  this.current_frame = 1;
  this.turn = 1;
}

Game.prototype.addBowl = function(pins) {
  this.frames[this.current_frame - 1].push(pins);
  if ( this.wasStrike() === true ) {
    this.frames[this.current_frame - 1].push("-");
  } else if ( this.wasSpare() === true ) {
    this.frames[this.current_frame - 1][1] = "/";
  }
  this.nextFrame();
};

Game.prototype.wasStrike = function() {
  if (this.frames[this.current_frame - 1].includes("X")) {
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
