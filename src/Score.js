'use strict'

function Score() {
  this.cur_frame = 0;
  this.cur_roll = 0;
}

Score.prototype.knowDown = function(pins) {
  this.cur_frame.push(pins);
  return pins;
};

Score.prototype.frameScore = function(frame_ary) {
  if (frame_ary === undefined) {return}

};

Score.prototype.isStrike = function(frame_ary) {
  if (frame_ary === undefined) {return}
  return (ary[0] === 10);
};