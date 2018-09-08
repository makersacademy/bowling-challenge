'use strict';

function Bowling(){
  this.STRIKE = 10;
  this.bowling_score = [];
  this.frame = [];
}

Bowling.prototype.roll = function(score){
  this.frame.push(score);
  if (this.frame.length > 2) {
    throw new Error('already had 2 rolls');
  };
};

Bowling.prototype.score = function(){
  this.bowling_score.push(this.frame);
  this._clear_frame();
  return this._calc_score();
};

Bowling.prototype._clear_frame = function(){
  return this.frame = [];
};

Bowling.prototype._calc_score = function(){
  var new_score = this.bowling_score.concat.apply([], this.bowling_score);
  return new_score.reduce((a, b) => a + b);
};

Bowling.prototype.isStrike = function(){
  if (this.frame[this.frame.length-1] === 10){
    return true;
  }
    return false;
};
