function Game() {
  this.rolls = [];
  this.frames = [];
  this.pairs = [];
  // this.score = 0;
}

Game.prototype._addFrame = function() {
  if (this.frames.length === 0 || this.frames.length === 1 ) {
    this.frames.push(1);
  } else if (this.frames[this.frames.length-1] !== this.frames[this.frames.length-2]) {
    this.frames.push(this.frames.length-1);
  } else if (this.frames[this.frames.length-1] === this.frames[this.frames.length-2]) {
    this.frames.push(this.frames[this.frames.length-1]+1);
  }
}

Game.prototype._currentFrame = function() {
  return this.frames[this.frames.length-1];
}

Game.prototype.score = function () {
  var counter = 0;
  this.rolls.map(function(roll) {
    counter += roll
  })
  return counter;
}
