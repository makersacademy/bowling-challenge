function Game() {
  this.frames = [new Frame()]
}

Game.prototype.addFrame = function() {
  if(this.frames.length > 11) throw ("You can only have 10 frames")
  this.frames.push(new Frame())
};
