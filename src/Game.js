function Game(frameClass = Frame){
  this.frames = [];
  this.frameClass = frameClass;
}

Game.prototype.bowl = function(score){
  this.frames.push(new this.frameClass);
  this.frames[0].addScore(score);
}
