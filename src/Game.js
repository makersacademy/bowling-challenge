function Game(){
  this.MAX_FRAMES = 10;
  this.frames = [];
  this.score = 0;
};

Game.prototype.play = function(){
  var frame = new Frame()
  this.frames.push(frame)
};
