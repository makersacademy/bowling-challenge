var Game = function(){
  this.MAX_FRAMES = 10;
  this.frameCount = 1;
  this.score = 0;
  this.points = [];
};

Game.prototype.startNewFrame = function(){
  return new Frame();
}
