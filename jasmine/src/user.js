function User() {
  this.frames = []
}

User.prototype.addFrame = function(frame) {
  this.frames.push(frame);
};

User.prototype.calculateScore = function() {
  game = new Game(this.frames);
  return game.calculateScore();
};
