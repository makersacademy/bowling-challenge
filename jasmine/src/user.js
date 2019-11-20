User = function() {
  this.frames = [];
  this.result = 0
}

User.prototype.addFrame = function(frame) {
  this.frames.push(frame);
};

User.prototype.calculateScore = function() {
  game = new Game(this.frames);
  result = game.calculateScore();
  this.result = result;
};
