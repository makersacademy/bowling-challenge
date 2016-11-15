function Game() {
  this.frames = []
}

Game.prototype.newFrame = function(frame) {
  if (this.frames.length > 9) {
    throw new Error('You done here yeah!');
  } else {
  this.frames.push(frame);
  }
}
