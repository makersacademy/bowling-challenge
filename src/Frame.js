'use strict';

function Frame () {
  this._rolls = []
  this._score = 0;
};

Frame.prototype.getCurrentScore = function () {
  return this._score
};
