function Game(frameClass = Frame){
  this.frames = [];
  this.frameClass = frameClass;
}

Game.prototype.bowl = function(score){
  this.frames.push(this.createFrame());
  this.frames[0].addScore(score);
}

Game.prototype.createFrame = function(){
  return new this.frameClass;
}
