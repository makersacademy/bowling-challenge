function Game(frameClass = Frame){
  this.frames = [];
  this.frameClass = frameClass;
}

Game.prototype.bowl = function(score){
  console.log(this.frames.length === 0)
  if (this.frames.length !== 0) {  console.log(this.currentFrame().isComplete)}
  if (this.frames.length === 0 || this.currentFrame().isComplete){
    this.frames.push(this.createFrame());
  }
  this.currentFrame().addScore(score);
}

Game.prototype.createFrame = function(){
  return new this.frameClass;
}

Game.prototype.currentFrame = function(){
  return this.frames[this.frames.length - 1];
}
