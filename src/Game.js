function Game(frameClass = Frame){
  this.frames = [];
  this.frameClass = frameClass;
}

Game.prototype.bowl = function(score){
  if (this.isOver()) { return }
  if (this.frames.length === 0 || this.currentFrame().isComplete){
    if (this.frames.length < 10){ this.frames.push(this.createFrame()); }
   }
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

Game.prototype.currentScore = function(){
  var score = 0;
  for (var i = 0; i < this.frames.length; i++){
    if (this.frames[i].score){ score += this.frames[i].score }
  }
  return score;
}

Game.prototype.isOver = function(){
  return ((this.frames.length === 10) && !!this.currentFrame().score)
}
