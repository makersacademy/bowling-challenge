'use strict'
/*jshint esversion: 6 */

function Game() {
  this.frame = [];
  this.roll = 0;
  this.rollbonus = 0
  this.scoreBoard = []
}

var game = new Game()


Game.prototype.getFrame = function() {
  return this.frame
};

Game.prototype.sumFrame = function() {
  return this.frame.reduce((a, b) => a + b, 0);
}

Game.prototype.getRoll = function() {
  return this.roll
};

Game.prototype.bowl = function() {
  this.roll = Math.floor(Math.random() * 11);
};

Game.prototype.addToFrame = function() {
  if (game.roll === 10) {
  this.frame.push(this.getRoll());
  }
};
