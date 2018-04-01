'use strict';

function Frame() {
  this._score = [];
};

Frame.prototype.roll = function(pinsDown) {
  if (pinsDown > 10) {
    throw new Error ('There are only 10 pins');
  }
  this._score.push(pinsDown);
};

Frame.prototype.tot = function() {
  var total = 0;
  for(var idx = 0; idx < this._score.length; ++idx ) {
      total += this._score[idx];
  };
  return total;
};
