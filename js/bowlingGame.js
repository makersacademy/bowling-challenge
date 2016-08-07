'use strict';

function Game() {
  this._score = [];
}

Game.prototype.frameResult = function() {
  return this._score;
};

Game.prototype.frameBowls = function(bowl1, bowl2) {
  this._score.push([bowl1, bowl2]);
};

Game.prototype.score = function() {
  var calcTheScore = this._score.reduce(makeFlat, []);
  return calcTheScore.reduce(add, 0);
};


// guard conditions on frame score input

function validateScore(bowl1, bowl2) {
  
};

// functions to use with reduce
function add(a, b) {
  return a + b;
};

function makeFlat(a, b) {
  return a.concat(b);
};
