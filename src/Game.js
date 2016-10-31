function Game() {
  this._frames = [];
  this._currentFrame = null;
  this.MAX_FRAMES = 10;
};

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
    this._currentFrame = frame;
  }
};

Game.prototype.currentFrame = function() {
  return this._currentFrame;
};

Game.prototype.frames = function() {
  return this._frames.slice(0);
};

Game.prototype.roll = function(n) {
  if(!this.currentFrame() || this.currentFrame().isComplete()) {
    frame = new Frame();
    this.addFrame(frame);
  }
  this.currentFrame().addRoll(n);
}
