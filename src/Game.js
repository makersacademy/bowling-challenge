function Game() {
  this.frames = [];

}

Game.prototype.play = function(pins) {
  this.frames.push(pins);
};

Game.prototype.score = function() {
  return this.frames.reduce((prev, curr) => prev + curr );
};
