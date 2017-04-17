Game = function(){
  this.Frames = []
  this.total = 0
};

Game.prototype.playFrame = function(frame){
  frame.play();
  this.Frames.push(frame);
};

Game.prototype.nextFrame = function(frame){
  index = this.Frames.indexOf(frame);
  return this.Frames[index+1]
};

Game.prototype.frameResult = function(frame){
  if (frame.isSpare()) {
    return this.resultIfSpare(frame);
  } else if (frame.isStrike()) {
    return this.resultIfStrike(frame);
  } else {
    return frame.totalHitInFrame()
  };
};

Game.prototype.resultIfSpare = function(frame){
  if (this.nextFrame(frame) == undefined) {
    return "Play the next frame"
  } else {
    return frame.totalHitInFrame() + this.bonusIfSpare(frame)
  };
};

Game.prototype.bonusIfSpare = function(frame){
  return this.nextFrame(frame).pinsHitByFirstRoll()
};

Game.prototype.resultIfStrike = function(frame){
  next = this.nextFrame(frame)
  nextnext = this.nextFrame(next)
  if ((next == undefined) || (next.isStrike() && nextnext == undefined)) {
    return "Play the next frame"
  } else {
    return frame.totalHitInFrame() + this.bonusIfStrike(frame)
  };
};

Game.prototype.bonusIfStrike = function(frame){
  next = this.nextFrame(frame)
  nextnext = this.nextFrame(next)
  if (next.isStrike()) {
    return next.totalHitInFrame() + nextnext.pinsHitByFirstRoll;
  } else {
    return next.totalHitInFrame();
  }
};


