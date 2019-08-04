function Game() {
  this.currentFrameIndex = 0;
  this.frames = new Array(10).fill(null).map(function() {
    return [];
  });
};

Game.prototype.score = function () {
  return this.frames.reduce(function(totalScore, frame) {
    return totalScore + frame.reduce(function(acc, pins) { return acc + pins }, 0)
  }, 0)
}

Game.prototype.currentFrame = function(){
  return this.frames[this.currentFrameIndex]
}

Game.prototype.bowl = function(pins) {
  this.currentFrame().push(pins);
  this.processPreviousFrameBonus(pins);
  this.processPreviousPreviousFrameBonus(pins);
  if (this.currentFrameIndex < 9 && this.isCurrentFrameComplete())  {
    this.currentFrameIndex += 1;
  }
};

Game.prototype.isCurrentFrameComplete = function () {
    return this.currentFrame().length === 2 || this.currentFrame()[0] === 10
}

Game.prototype.processPreviousFrameBonus = function(pins) {
  var previousFrame = this.frames[this.currentFrameIndex - 1]
  if (previousFrame && (this.isFrameStrike(previousFrame) || this.isFrameSpare(previousFrame)) && previousFrame.length < 3){
    previousFrame.push(pins);
  }
}

Game.prototype.processPreviousPreviousFrameBonus = function(pins) {
  var previousPreviousFrame = this.frames[this.currentFrameIndex - 2]
  if (previousPreviousFrame && this.isFrameStrike(previousPreviousFrame) && previousPreviousFrame.length < 3) {
    previousPreviousFrame.push(pins);
  }
}

Game.prototype.frameTenBonus = function(pins) {
  if (this.currentFrame()[0] === 10 && this.currentFrame()[1] === 10){
    this.currentFrame().push(pins);
  }
}

Game.prototype.isFrameStrike = function (frame) {
  return frame[0] === 10
}

Game.prototype.isFrameSpare = function (frame) {
  return frame[0] + frame[1] === 10
}
