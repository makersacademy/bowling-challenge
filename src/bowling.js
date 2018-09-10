'use strict';

function Bowling(){
  this.STRIKE = 10;
  this.score_card = [];
  this.bowling_score = [];
  this.frame = [];
  this.isStrike = false;
  this.isSpare = false;
  this.total = 0;
}

Bowling.prototype.roll = function(score){
  this.frame.push(score);
  this.frame_roll();
};

Bowling.prototype.score = function(){
  return this._calc_score();
};

Bowling.prototype.frame_roll = function(){
  if (this.strike()) {
    this._clear_frame();
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
  var total = 0
  var new_score = this.bowling_score.concat.apply([], this.bowling_score);
  new_score.forEach(function(score){
    total += score
  });
  if (new_score[new_score.length-3] === this.STRIKE){
    total += new_score[new_score.length-2] + new_score[new_score.length-1]
  };
  this.score_card.push(new_score);
  this.total += total
  this.bowling_score = [];
  return this.total
};

// Bowling.prototype._calc_strike = function(){
//   var new_score = this.bowling_score.concat.apply([], this.bowling_score);
//   if (new_score[new_score.length-3] === this.STRIKE){
//     new_score[new_score.length-2] + new_score[new_score.length-1]
//   };
// };

Bowling.prototype._calc_spare = function(){
  var new_score = this.score_card.concat.apply([], this.score_card);
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
