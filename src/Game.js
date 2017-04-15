function Game() {
  this.framesLeft = this.DEFAULTFRAMESLEFT;
  this.frames = [];
  this.currentFrame = 1;
  this._frame = this.createFrame();
}

Game.prototype.DEFAULTFRAMESLEFT = 10;

Game.prototype.createFrame = function() {
  return new Frame();
};

Game.prototype.play = function() {
  if(this.rollsLeft(this._frame) === 2) {
    this._frame.play();
  }
  else if(this.rollsLeft(this._frame) === 1){
    this._frame.play();
    this.addFrame(this._frame);
    this.changeFrame();
  }
  else {
    this.addFrame(this._frame);
    this.changeFrame();
  }
};

Game.prototype.addFrame = function(frame) {
  this.frames.push(frame)
};

Game.prototype.changeFrame = function() {
  this.framesLeft -= 1;
  this.currentFrame += 1;
  this._frame = this.createFrame();
};

Game.prototype.rollsLeft = function(frame) {
  return frame.rollsLeft;
};
