Game = function(){
  this.frameNumber = 1;
};

Game.prototype.getFrameNumber = function () {
  return this.frameNumber;
};

Game.prototype.playGame = function () {
  frame = new Frame();
  frame.playFrame();
};
