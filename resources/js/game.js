'use strict'

function Game() {
  this.frame = [];
  this.roll = 0;
}

var game = new Game()


Game.prototype.getFrame = function() {
  return this.frame
};

Game.prototype.getRoll = function() {
  return this.roll
};

Game.prototype.bowl = function() {
  this.roll = Math.floor(Math.random() * 11);
};
