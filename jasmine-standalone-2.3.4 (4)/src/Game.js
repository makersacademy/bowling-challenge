function Game() {
  this.scores = [];
  this.frames = [];
  this.hashes = [];
}

Game.prototype.addFrame = function() {
  if (this.frames.length === 0 || this.frames.length === 1 ) {
    this.frames.push(1);
  } else if (this.frames[this.frames.length-1] !== this.frames[this.frames.length-2]) {
    this.frames.push(this.frames.length-1);
  } else if (this.frames[this.frames.length-1] === this.frames[this.frames.length-2]) {
    this.frames.push(this.frames[this.frames.length-1]+1);
  }
}

Game.prototype.currentFrame = function() {
  return this.frames[this.frames.length-1];
}
