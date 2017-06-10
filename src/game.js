function Game () {
  this.frames = [];
};

Game.prototype.add = function (frame) {
  this.frames.push(frame);
};
