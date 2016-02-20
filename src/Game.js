function Game(player) {
  this.frames = [];
  this.totalScore = 0;
  this.player = player;
}

Game.prototype.addFrame = function() {
  var frame = new Frame();
  this.frames.push(frame);
};
