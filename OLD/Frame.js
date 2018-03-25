'use strict';

const MAXIMUM_ROUNDS = 2;
const MAXIMUM_SCORE = 10;

function Frame() {
  this._score = 0;
  this._rounds = [];
};

Frame.prototype.addRound = function(round) {

  if (this.isStartingWithStrike()) {
    this._rounds.push(round);
  };

  if (this.isFrameComplete()) {
    throw new Error('Max number of rounds exceeded');
  } else {
    this._rounds.push(round);
  };
};

Frame.prototype.score = function() {
  let that = this;
  this._rounds.forEach(function(element) {
    that._score += parseInt(element._score);
  });
  return this._score;
};

Frame.prototype.isStartingWithStrike = function() {
  if (this._rounds[0]._score == MAXIMUM_SCORE) {
    return true;
  };
  return false;
};

Frame.prototype.isFrameComplete = function() {
  if (this._rounds.length >= MAXIMUM_ROUNDS) {
    return true;
  };
  return false
};
