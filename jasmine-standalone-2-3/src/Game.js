
NUM_OF_FRAMES = 10;

function Game() {
  this.frames = [];
  this.max_frames = NUM_OF_FRAMES;
}

Game.prototype.bowl = function (rolls) {
  if (this.isOver()) {
    throw new Error ("Game finished. Please start new game.");
  }
  this.frames.push(new Frame(rolls));
};

Game.prototype.score = function () {
  return this._calculateScore();
};

Game.prototype._calculateScore = function() {
  return this.frames.reduce(function(total, frame, i, frames){
    return total + frame.total(frames[i + 1],frames[i + 2]);
  },0);
};

Game.prototype.isOver = function () {
  return this.frames.length >= this.max_frames
};
