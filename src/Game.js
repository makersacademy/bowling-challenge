function Game(frameClass = Frame){
  this.frames = [];
  this.frameClass = frameClass;
}

Game.prototype.bowl = function(score){
  if (this.frames.length === 0 || this.currentFrame().isComplete){ this.frames.push(this.createFrame()); }
  for (var i = 0; i < this.frames.length; i++){
    if (!this.frames[i].score){ this.frames[i].addScore(score); }
  }
}

Game.prototype.createFrame = function(){
  return new this.frameClass;
}

Game.prototype.currentFrame = function(){
  return this.frames[this.frames.length - 1];
}
