Game = function(){
  this.Frames = []
  this.rolls = []
  this.total = 0
};

Game.prototype.playFrame = function(frame){
  frame.play();
  this.Frames.push(frame);
  this.rolls.push(frame.pinsHitByFirstRoll, frame.pinsHitBySecondRoll)
};

Game.prototype.nextFrame = function(frame){
  index = this.Frames.indexOf(frame);
  return this.Frames[index+1]
};

Game.prototype.frameResult = function(frame){
  if (!frame.isStrike() && !frame.isSpare()) {
    return frame.totalHitInFrame();
  } else if (frame.isSpare()) {
    return frame.totalHitInFrame() + game.nextFrame(frame).pinsHitByFirstRoll()
  } else if (frame.isStrike()) {
    return frame.totalHitInFrame() + this.nextFrame(frame).totalHitInFrame()
  };
};