function Game() {
  this.frames = [new Frame()]
}

Game.prototype.addFrame = function() {
  if(this.lastFrame().rolls.length == 2)
  this.frames.push(new Frame())
}

Game.prototype.add = function(pins) {
  this.addFrame()
  this.lastFrame().addPins(pins)
  this.score()
  }

Game.prototype.score = function() {
  return this.lastFrame().frameScore();
}

Game.prototype.lastFrame = function() {
  return this.frames[this.frames.length - 1];
}