'use strict';

function Frame() {
  this._score = 0;
  this._rounds = [];
};

Frame.prototype.addRound = function(round) {
  if (this._rounds.length >= 3) {
    throw new Error("Max number of rounds exceeded");
  } else {
    this._rounds.push(round);
  };
};

Frame.prototype.score = function() {
  let that = this;
  this._rounds.forEach(function(element) {
    that._score += element._score;
  });
  return this._score;
};
