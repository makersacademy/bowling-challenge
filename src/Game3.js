function Game() {
  this.frames = Array(10).fill().map(function() {
    return new Frame();
  });
  this.currentFrameIndex = 0;
  this.currentFrame = null;
  this.isSpareBonusActive = false;
  this.isStrikeBonusActive = false;
}

Game.prototype.roll = function(rollToBeAdded) {
  this.updateCurrentFrame();
  console.log(this.currentFrame);

  this.currentFrame.roll(this, rollToBeAdded);
  if (this.currentFrame.isCompleted) {
    if (this.currentFrameIndex < 10) {
      this.currentFrameIndex++;
    }
  }
  console.log(this.getCurrentScore());
}

Game.prototype.getCurrentScore = function() {
  var total = 0;
  this.frames.forEach(function(frame) {
    total += frame.rollsArray[0];
    total += frame.rollsArray[1];
  });
  return total;
}

Game.prototype.updateCurrentFrame = function() {
  this.currentFrame = this.frames[this.currentFrameIndex];
}

function Frame() {
  this.rollsArray = [0, 0];
  this.bonusScore = 0;
  this.extraRollsArray = [0];
  this.extraRollsTotal = 0;
  this.currentRollIndex = 0;
  this.isCompleted = false;
}

Frame.prototype.roll = function(game, rollToBeAdded) {
    console.log(game, rollToBeAdded);
    switch (this.currentRollIndex) {
    case 0:
      this.updateFirstRoll(game, rollToBeAdded);
      break;
    case 1:
      this.updateSecondRoll(game, rollToBeAdded);
      break;
    case 2:
      this.updateExtraRoll(game, rollToBeAdded);
      break;
  }
};

Frame.prototype.updateFirstRoll = function(game, rollToBeAdded) {
  this.rollsArray[0] = rollToBeAdded;

  this.isCompleted = false;
  this.currentRollIndex = 1;
};

Frame.prototype.updateSecondRoll = function(game, rollToBeAdded) {
  this.rollsArray[1] = rollToBeAdded;
  this.isCompleted = true;
  if (game.currentFrameIndex == 10 && this.isCompleted) {
    this.currentRollIndex = 2;
  } else {
    this.currentRollIndex = 0;
  }
};

Frame.prototype.updateExtraRoll = function(game, rollToBeAdded) {
  this.extraRollsArray[0] = rollToBeAdded;
  this.currentRollIndex = 0;
};
