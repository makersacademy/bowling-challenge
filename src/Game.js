function Game() {
  this.frames = [];
  this.currentFrame = null;
  this.watchingForSpares = false;
  this.watchingForStrikes = false;
}

// this is called by the user
Game.prototype.roll = function(rollToBeAdded) {
  if (this.checkIfNewFrameNeeded()) {
    this.createNewFrame();
    this.updateCurrentFrame();
  }
  this.currentFrame.addNewRoll(rollToBeAdded);
  if (this.watchingForSpares) {
    this.addBonusScoreToPreviousFrame(rollToBeAdded);
    this.watchingForSpares = false;
  }
  console.log("current score " + this.getCurrentScore());
  if (this.isLastFrameDone()) {
    console.log(`Frame ${this.getFrameNumber(this.currentFrame)}: `, this.currentFrame);
    this.checkForSpares();
  }
};

// can be called throughout the game to update the current score in the UI
Game.prototype.getCurrentScore = function() {
  var total = 0;
  this.frames.forEach(function(frame) {
    total += frame.frameTotal;
  });
  return total;
}

Game.prototype.createNewFrame = function() {
  this.frames.push(new Frame());
}

Game.prototype.checkIfNewFrameNeeded = function() {
  if (this.currentFrame == null) {
    return true;
  }
  return this.isLastFrameDone();
}

Game.prototype.isLastFrameDone = function() {
  return this.currentFrame.rollsCount == 2;
}

Game.prototype.updateCurrentFrame = function() {
  this.currentFrame = this.frames[this.frames.length - 1];
}

Game.prototype.getFrameNumber = function(frame) {
  return 1 + this.frames.indexOf(frame);
}

Game.prototype.getFrameIndex = function(frame) {
  return this.frames.indexOf(frame);
}

Game.prototype.checkForSpares = function() {
  if (this.currentFrame.frameTotal == 10) {
    this.watchingForSpares = true;
  }
}

Game.prototype.addBonusScoreToPreviousFrame = function(rollToBeAdded) {
  var previousFrame = this.getPreviousFrame();
  previousFrame.frameTotal += rollToBeAdded;
}

Game.prototype.getPreviousFrame = function() {
  return this.frames[this.getFrameIndex(this.currentFrame) - 1];
}

function Frame() {
  this.rollsArray = [0, 0];
  this.frameTotal = 0;
  this.currentRollIndex = 0;
  this.rollsCount = 0;
}

Frame.prototype.addNewRoll = function(rollToBeAdded) {
  if (this.currentRollIndex == 0) {
    this.rollsArray[0] = rollToBeAdded;
    this.currentRollIndex = 1;
  } else {
    this.rollsArray[1] = rollToBeAdded;
    this.frameTotal = this.rollsArray[0] + this.rollsArray[1];
    this.currentRollIndex = 0;
  }
  this.rollsCount++;
}
