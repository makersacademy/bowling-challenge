'use strict';

function Bowling(){
  this.STRIKE = 10;
  this.bowling_score = [];
  this.frame = [];
  this.isStrike = false;
  this.isSpare = false;
}

Bowling.prototype.roll = function(score){
  this.frame.push(score);
  this.frame_roll();
};

Bowling.prototype.score = function(){
  if (this.isStrike) {
    return this._calc_score() + this._calc_strike();
  } else if (this.isSpare) {
    return this._calc_score() + this._calc_spare();
  } else {
    return this._calc_score();
  };
};

Bowling.prototype.frame_roll = function(){
  if (this.strike()) {
    this._clear_frame();
    return this.score();
  };
  if (this.spare()) {
    this._clear_frame();
  };
  if (this.frame.length >= 2) {
    this._clear_frame();
  };
};

Bowling.prototype._clear_frame = function(){
  this.bowling_score.push(this.frame);
  return this.frame = [];
};

Bowling.prototype._calc_score = function(){
  var new_score = this.bowling_score.concat.apply([], this.bowling_score);
  return new_score.reduce((a, b) => a + b);
};

Bowling.prototype._calc_strike = function(){
  var new_score = this.bowling_score.concat.apply([], this.bowling_score);
  return new_score[new_score.length-1] + new_score[new_score.length-2];
};

Bowling.prototype._calc_spare = function(){
  var new_score = this.bowling_score.concat.apply([], this.bowling_score);
  return new_score[new_score.length-2];
};

Bowling.prototype.strike = function(){
  if (this.frame[0] === this.STRIKE) {
    return this.isStrike = true }
};

Bowling.prototype.spare = function(){
  if ((this.frame[0] + this.frame[1]) === this.STRIKE) {
    return this.isSpare = true }
};
