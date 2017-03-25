// var Frame = require('../src/frame');

function Game() {

}



var Game = function() {
  this.frames = [];
};

Game.prototype._roll = function() {
  return Math.floor(Math.random() * 10);
};

Game.prototype._oneFrame = function() {
  var firstRoll = this._roll();
  var secondRoll = 10 - firstRoll;
  return [firstRoll, secondRoll];
};
