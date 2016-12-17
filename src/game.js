var Game = function(){
  this.MAX_FRAMES = 10;
  this.frameCount = 0;
  this.score = 0;
  this.points = [];
};

Game.prototype.startNewFrame = function(){
  var self = this;
  this.frame = new Frame(function finishFrame(frame){
    self.endFrame(frame);
  });
  this.frameCount += 1;
}

Game.prototype.endFrame = function(frame){
  this.score += frame.score;
  this.points.push(frame);
  if (this.isLastFrame() && !frame.isStrike() && !frame.isSpare()) {
    return "Game over!"
  } else {
    this.startNewFrame();
  }
}

Game.prototype.isLastFrame = function(){
  return this.frameCount === this.MAX_FRAMES
}

Game.prototype.calculateBonusPoints = function(frame){
    var framePosition = this.points.indexOf(frame);
    var nextFrame = this.points[framePosition + 1];

    if (frame.isSpare()) {
      return nextFrame.points[0];
    }

    if (frame.isStrike()) {
      if (nextFrame.points.length === 2) {
        return nextFrame.score;
      } else {
        var secondFrame = this.points[framePosition + 2];
        return nextFrame.score + secondFrame.points[0];
      }
    }
    else {
      return 0;
    }
}

Game.prototype.addBonusPoints = function(frame){
  frame.bonus = this.calculateBonusPoints();
}
