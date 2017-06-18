'use strict';
var Frame = require('./frame');

function Game() {
  this.score = 0;
  this.frames = [];
}

Game.prototype.roll = function(bowl) {
  if (this.frames.length < 1) {
    this.newFrame();
  }
//  var currentFrame = this.getCurrentFrame();
//  currentFrame.firstRoll(bowl);
};

Game.prototype.newFrame = function() {
  this.frames.push(new Frame());
};

module.exports = Game;
