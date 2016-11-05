function Game() {
  this._frames = [];
  this.MAX_FRAMES = 10;
}

Game.prototype.score = function() {
  this._score = 0;
  for(var i=0; i<this.frames().length; i++) {
    this._score += this.frames()[i].total();
  }
  return this._score;
};

Game.prototype.addFrame = function(frame) {
  if(this.frames().length < this.MAX_FRAMES) {
    this._frames.push(frame);
  }
};

Game.prototype.currentFrame = function() {
  return this._frames[this._frames.length - 1];
};

Game.prototype.previousFrame = function() {
  return this._frames[this._frames.length - 2];
};

Game.prototype.beforePreviousFrame = function() {
  return this._frames[this._frames.length - 3];
};

Game.prototype.frames = function() {
  return this._frames.slice(0);
};

Game.prototype.roll = function(n) {
  if(this.currentFrame() === undefined || this.currentFrame().isComplete()) {
    frame = new Frame();
    this.addFrame(frame);
  }
  this.currentFrame().addRoll(n);
  if(this.previousFrame() != undefined && this.previousFrame().isStrike()) {
    this.previousFrame().addValue(n);
  }
  // if frame before is strike or spare add this roll result to last frame
  // if rolling twice and strike before add the second roll result too
  // this.previous_frame or this._frames[current_index-1]
}

Game.prototype.isComplete = function() {
  return this.frames().length === 10 && this.currentFrame().isComplete();
}
