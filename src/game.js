function Game(passedObject = Frame()) {
  this.frames = [];
  this.frameNumber = 1;
}

Game.prototype.nextRound = function() {
  this.frameNumber++
};

Game.prototype.firstBall = function(pins) {
  this.newFrame();
  this.frames.pop().firstRoll(pins);
}

Game.prototype.newFrame = function() {
  var frame = new Frame();
  this.frames.splice(-1,0, frame)  ;
}
