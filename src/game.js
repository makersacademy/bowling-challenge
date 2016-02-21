function Game(playerName, frameFunc) {
  this._frameFunc = frameFunc || new Frame();
  this.player = playerName;
  this.frames = [];
  this.currentFrame = this._frameFunc;
  this.score = 0;
}

Game.prototype.nextFrame = function () {
  if(!this.currentFrame.isComplete()){
    throw new Error('Finish frame first');
  }
  this.score += this.currentFrame.score();
};
