var Game = function () {
  this.frames = [];
};

Game.prototype.addFrame = function(frame) {
  this.frames.push(frame);
};

Game.prototype.score = function() {
  return this.frames.reduce((a,b)=> a + b);
}
