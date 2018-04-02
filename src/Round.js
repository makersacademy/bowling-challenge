'use strict';

function Round(score = 0) {
  this._score = score;
};

Round.prototype.score = function() {
  return this._score;
};
