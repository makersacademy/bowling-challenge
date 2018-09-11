"use strict";

var Frame = require('../../public/js/Frame');

// var Game = function() {
//   this.frameArray = [];
// };

function Game() {
  this.frameArray = [];
};

Game.prototype.play = function(roll) {
  var frame = new Frame(roll);
  this.frameArray.push(frame);
  return frame;
};

Game.prototype.score = function() {

};

module.exports = Game;
