'use strict';

function Game() {
  this._score = [[0,0],[0,0],[0,0],[0,0],[0,0],[0,0],[0,0],[0,0],[0,0],[0,0,0]];
  this._frame = 1;
}

Game.prototype.frameBowls = function(bowl1, bowl2, bowl3) {
  this._score[this._frame-1][0] = bowl1;
  this._score[this._frame-1][1] = bowl2;
  if (this._frame === 10) {
    this._score[this._frame-1][2] = bowl3;
  };
  this._frame += 1;
};

Game.prototype.score = function() {
  var total = 0;
  var frameResults = this._score
  for (var frame = 0; frame < 10; frame++) {
    if (frame < 8) {
      // bonus score for a strike
      if (isStrike(frameResults[frame])) {
        if (isStrike(frameResults[frame+1])) {
          total += frameResults[frame+1][0] + frameResults[frame+2][0];
        } else {
          total += frameResults[frame+1].reduce(add,0);
        };
      // bonus score for a spare
    } else if (isSpare(frameResults[frame])) {
        total += frameResults[frame+1][0];
      };
      // adding the result of the frame pins knocked down
      total += frameResults[frame].reduce(add,0);
    };
    // for frame 9
    if (frame === 8) {
      if (isStrike(frameResults[frame])) {
        total += frameResults[frame+1][0] + frameResults[frame+1][1];
      } else if (isSpare(frameResults[frame])) {
        total += frameResults[frame+1][0];
      };
      total += frameResults[frame].reduce(add,0);
    };
    // for frame 10
    if (frame === 9) {
      total += frameResults[frame].reduce(add,0);
    };

  };
  return total;
};

// function to determine rules for the score function
function isStrike(frame) {
  if (frame[0] === 10) {
    return true
  }
  return false
};

function isSpare(frame) {
  if (frame[0] + frame[1] === 10) {
    return true
  }
  return false
};

// functions to use with reduce
function add(a, b) {
  return a + b;
};

function makeFlat(a, b) {
  return a.concat(b);
};
