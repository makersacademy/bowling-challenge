function Game(){
  this.currentFrame = new Frame();
  this.framesPlayed = 0;
  this._frames = [];
  this.score = 0;
}

Game.prototype.nextFrame = function () {
  checkFrameOver();
};
