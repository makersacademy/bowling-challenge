function Game(frameLog = new FrameLog(), pins = new Pins()) {
  this.frameLog = frameLog;
  this.pins = pins;
}

Game.prototype.play = function() {
  if (this.frameLog.frames.length === 10) throw "Game Over";
  score = this.generate(this.pins.get());
  this.frameLog.addScore(score);
}

Game.prototype.generate = function(boundary=10) {
  score = new Score();
  return score.new(boundary);
}
