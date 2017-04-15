function Game() {
  this.framesLeft = this.DEFAULTFRAMESLEFT;
  this.frames = [];
  this.currentFrame = 1;
  this._frame = new Frame();
}

Game.prototype.DEFAULTFRAMESLEFT = 10;

Game.prototype.play = function() {
  if(this._frame.rollsLeft === 2) {
    this._frame.play();
  }
  else if(this._frame.rollsLeft === 1){
    this._frame.play();
    this.frames.push(this._frame.score);
    this.framesLeft -= 1;
  }
  else {
    this.frames.push(this._frame.score);
    this.framesLeft -= 1;
  }
};
