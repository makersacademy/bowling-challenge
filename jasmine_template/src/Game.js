var Game = function() {
  this.player = 1;
  this.frames = [];
};

Game.prototype.startGame = function() {
  this.addFrames();
  this.addFrameIndex();
};

Game.prototype.addFrames = function() {
  for(var i = 0; i < 10; i ++) {
    frame = new Frame();
    this.frames.push(frame);
  }
};

Game.prototype.addFrameIndex = function() {
  for (var i = 0; i < 10; i ++) {
    this.frames[1].number = i + 1;
  }
};