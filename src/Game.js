function Game() {
  this.roll = 0;
  this.frame = 0;
  this.frames = []
  for(var i = 0; i < 10; i++) {
    this.frames.push([]);
  }
  this.knockedDownPins = []
}

Game.prototype.getScore = function() {
  var total = 0;
  for(var i = 0; i < this.frames.length; i++) {
    var currentFrameTotal = this.frameTotal(this.frames[i]);
    total += currentFrameTotal;

    var isSpare = currentFrameTotal === 10;

    if (isSpare) {
      var nextFrame = this.frames[i+1];
      if(nextFrame.length !== 0) {
        total += nextFrame[0];
      }
    }

  }
  return total;
};

Game.prototype.rollBall = function(numberOfPins) {
  if (numberOfPins > 10) {
    throw 'Error can\'t roll more than 10 pins per roll';
  }
  var currentFrame = this.frames[this.frame];
  currentFrame.push(numberOfPins);

  if (this.frameTotal(currentFrame) > 10) {
    throw 'Error frame total can\'t be more than 10';
  }
  this.knockedDownPins.push(numberOfPins);
  this.countRoll();
};

Game.prototype.frameTotal = function(currentFrame) {
  if(currentFrame.length === 0) {
    return 0;
  }
  if(currentFrame.length === 1) {
    return currentFrame[0];
  }
  return currentFrame[0] + currentFrame[1];
};


Game.prototype.countRoll = function() {
  this.roll += 1;
  if (this.roll % 2 === 0) {
    this.incrementFrame();
  }
}

Game.prototype.getRollCount = function() {
  return this.roll;
};

Game.prototype.getFrameCount = function() {
  return this.frame;
};

Game.prototype.incrementFrame = function() {
  this.frame += 1;
};
