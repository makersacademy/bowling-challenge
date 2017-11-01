'use strict';

function Player() {
  this._score = [];
}

// Player.prototype.play = function() {
//
// };

Player.prototype.roll = function(int) {
  this._score.push(int);
  return int;
};

Player.prototype.score = function() {
  return sumArray(this._score);
};

function sumArray(array) {
  return array.reduce(function(result, item) {
    return result + item;
  });
}

Player.prototype.frames = function() {
  return chunk(this._score);
};

function chunk(arr) {
  var frames = [];
    var i = 0;
    var n = arr.length;
  while (i < n) {
    frames.push(arr.slice(i, i += 2));
  }
  return frames;
}

Player.prototype.frameScores = function() {
  var chunked = chunk(this._score);
  console.log(chunk(this._score));
  console.log(chunked);
  return calcFrameScores(chunked);
};


function calcFrameScores(array) {
  console.log(array)
  return array.map(function(arr) {
    console.log(arr);
    return arr.reduce(function(a, b) {
      return a + b;
    });
  });
}
