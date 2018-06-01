function Game(frameClass = Frame){
  this.frames = [];
  this.frameClass = frameClass;
}

Game.prototype.bowl = function(score){
  if (this.isOver()) { return }
  if (this._isNewGame() || (this.currentFrame().isComplete && this.frames.length < 10)){
    this.frames.push(this.createFrame());
  }
  for (var i = 0; i < this.frames.length; i++){
    if (this.frames[i].score === undefined){ this.frames[i].addScore(score); }
  }
}

Game.prototype.createFrame = function(){
  return new this.frameClass;
}

Game.prototype.currentFrame = function(){
  return this.frames[this.frames.length - 1];
}

Game.prototype.currentScore = function(frame = this.frames.length){
  var score = 0;
  for (var i = 0; i < frame; i++){
    if (!(this.frames[i].score === undefined)){ score += this.frames[i].score }
  }
  return score;
}

Game.prototype.isOver = function(){
  return ((this.frames.length === 10) && !!this.currentFrame().score);
}

Game.prototype._isNewGame = function(){
  return this.frames.length === 0;
}
