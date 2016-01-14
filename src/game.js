function Game(frameKlass, gameLength) {
  var DEFAULT_LENGTH = 10;
  var DEFAULT_FRAME_KLASS = Frame;

  this.gameLength = gameLength || DEFAULT_LENGTH;
  this.frameKlass = frameKlass || DEFAULT_FRAME_KLASS;

  this.frames = [];
  this.totalScore = null;
  this.currentFrame = 0;

  this._setGame();
}

Game.prototype.bowl = function(num) {
  this.currentFrame.bowl(num);
}

Game.prototype.getTotalScore = function() {
  for (var i = 0; i < this.frames.length; i++) {
      this.totalScore += this.frames[i].getScore();
  }
  return this.totalScore;
}

Game.prototype.getCurrentFrame = function() {
  return this.currentFrame
}

Game.prototype._setGame = function() {
  for(var i=0; i < this.gameLength; i++) {
    this.frames.push(new this.frameKlass());
  }
  this.currentFrame = this.frames[0];
}
