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
  if (this.currentFrameIndex === 9) {
    this.processFinalFrame(pins);
  } else {
    this.processFrame(pins);
  }
}

Game.prototype.processFrame = function(pins) {
  if (this.isPinsNotAllowed(pins)) {
    throw new Error ("Illegal");
  }
  this.currentFrame().push(pins);
  this.processPreviousFrameBonus(pins);
  this.processPreviousPreviousFrameBonus(pins);
  if (this.isCurrentFrameComplete()) {
    this.currentFrameIndex += 1;
  }
};

Game.prototype.processFinalFrame = function(pins){
  if (this.isFinalFrameComplete()) {
    throw new Error ("No more frames available, create a new game to play again.");
  }
  if((this.currentFrame()[0] !== 10) && (this.currentFrame()[0] + pins > 10)){
    throw new Error ("Illegal");
  }
  this.currentFrame().push(pins);
  this.processPreviousFrameBonus(pins);
  this.processPreviousPreviousFrameBonus(pins);
}

Game.prototype.isCurrentFrameComplete = function () {
    return this.currentFrame().length === 2 || this.currentFrame()[0] === 10
}

Game.prototype.isFinalFrameComplete = function () {
  var finalFrame = this.frames[9]
  var isStrikeOrSpare = this.isFrameStrike(finalFrame) || this.isFrameSpare(finalFrame)
  return (isStrikeOrSpare && finalFrame.length === 3) || (!isStrikeOrSpare && finalFrame.length === 2)
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

Game.prototype.isFrameStrike = function (frame) {
  return frame[0] === 10
}

Game.prototype.isFrameSpare = function (frame) {
  return frame[0] + frame[1] === 10
}

Game.prototype.isPinsNotAllowed = function(pins) {
  return this.currentFrame()[0] + pins > 10
}
