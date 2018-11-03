function Game() {
  this.frames = [];
  this.currentFrame = null;
}

// this is called by the user
Game.prototype.roll = function(rollToBeAdded) {
  if (this.isEmptyGame() || this.isLastFrameFull()) {
    this.createNewFrame();
  }
  this.updateCurrentFrame();
  this.currentFrame.addNewRoll(rollToBeAdded);
};

// can be called throughout the game to update the current score in the UI
Game.prototype.getCurrentScore = function() {
  var total = 0;
  this.frames.forEach(function(frame) {
    total = frame.rollsArray.reduce(function(accumulator, currentValue) {
      return accumulator + currentValue;
    });
  });
  return total;
}

Game.prototype.createNewFrame = function() {
  this.frames.push(new Frame());
}

Game.prototype.isEmptyGame = function() {
  return this.frames.length == 0;
}

Game.prototype.isLastFrameFull = function() {
  return this.frames[this.frames.length - 1].length == 2;
}

Game.prototype.updateCurrentFrame = function() {
  this.currentFrame = this.frames[this.frames.length - 1];
}

function Frame() {
  this.rollsArray = [];
}

Frame.prototype.addNewRoll = function(rollToBeAdded) {
  this.rollsArray.push(rollToBeAdded);
}
