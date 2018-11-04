var Frame = require("./frame")

var Game = function() {
  this.frames = [];
  for (var i = 0; i < 10; i++) {
    this.frames.push(new Frame);
  };
};

Game.prototype.currentFrame = function() {
  return this.frames.find(function(frame) {
    return !(frame.isComplete());
  });
};

module.exports = Game;
