'use strict';

function Game() {
  this._score = 0;
  this._frames = [];
};

Game.prototype.addFrame = function(frame) {
  if (this._frames.length > 10) {
    throw new Error('Max number of frames reached');
  } else {
    this._frames.push(frame);
  };
};

Game.prototype.score = function() {
  let that = this;
  this._frames.forEach(function(element) {
    that._score += element._score;
  });
  return this._score;
};

Game.prototype.framesPlayed = function() {
  return this._frames.length;
}

Game.prototype.full = function () {
  return true;
};
