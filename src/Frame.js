'use strict';

const STRIKE_OR_SPARE_SCORE = 10;
const DEFAULT_ROUND_FRAME_COUNT = 2;

function Frame() {
  this._score = 0;
  this._bonusScore = 0;
  this._rounds = [];
  this._noOfRounds = DEFAULT_ROUND_FRAME_COUNT;
};

Frame.prototype.reset = function() {
  this._rounds = [];
};

Frame.prototype.play = function(round) {
  if (this._rounds.length >= this._noOfRounds) {
    throw new Error('The maximum round limit for this frame has been reached!');
  } else {
    this._rounds.push(round);
  };
};

Frame.prototype.containsStrikeOrSpare = function() {
  let result = false
  this._rounds.forEach(function(round) {
    return result = (round.score() >= STRIKE_OR_SPARE_SCORE) ? true : false;
  });
  return result;
};

Frame.prototype.strikeOnFirstRound = function () {
  return (this._rounds[0].isStrike()) ? true : false;
};

Frame.prototype.score = function() {
  let that = this;
  this._rounds.forEach(function(round) {
    that._score += round.score();
  });
  return this._score;
};

// last function needed exposure from the outside scope.
