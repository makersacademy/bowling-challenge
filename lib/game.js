var Frame = require("./frame")

var Game = function() {
  this.frames = [];
  for (var i = 0; i < 10; i++) {
    this.frames.push(new Frame(this));
  };
};

Game.prototype.currentFrame = function() {
  return this.frames.find(function(frame) {
    return !(frame.isComplete());
  });
};

Game.prototype.roll = function(value) {
  this.currentFrame().roll(value);
};

Game.prototype.total = function() {
  var sum = 0;
  this.frames.forEach(function(frame) {
    sum += frame.total;
  });
  return sum;
};

module.exports = Game;
