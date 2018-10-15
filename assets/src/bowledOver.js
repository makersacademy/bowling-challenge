function Bowling() {
  this.rollAccumulator = [];
  this.frame = 1;
  this.rollsThisFrame = 0;
  this.pinsSet = 10;
};

Bowling.prototype.getFrame = function () {
  return this.frame;
};

Bowling.prototype.nextFrame = function () {
  this.rollsThisFrame = 0;
  this.pinsSet = 10;
  this.strikeThisFrame = false;
  if (this.frame < 11) {
    this.frame += 1;
  } 
  else {
    this.frame = 11;
  }
};

Bowling.prototype.isFrameComplete = function () {
  if (this.rollsThisFrame === 2 || (this.pinsSet === 0)) {
    this.nextFrame();
  } else {
    return false;
  }
};

Bowling.prototype.roll = function (pins) {
  if (pins > this.pinsSet) {
    throw new TypeError('Please enter a valid number of pins!');
  } else {
    this.rollsThisFrame += 1;
    this.rollAccumulator.push(pins);
    this.pinsSet -= pins;
    this.isFrameComplete();
  }
};

Bowling.prototype.getScore = function () {
  let gameScore = 0;
  let rollIndex = 0;
  let game = this;

  for (let frameIndex = 0; frameIndex < this.frameNumber-1; frameIndex++) {
    if (isStrike()) {
      gameScore += getStrikeScore();
      rollIndex += 1;
    } 
    else if (isSpare()) {
      gameScore += getSpareScore();
      rollIndex += 2;
    } 
    else {
      gameScore += getNormalScore();
      rollIndex += 2;
    }
  };
  return gameScore;

  function isStrike() {
    return game.rollAccumulator[rollIndex] === 10;
  };

  function isSpare() {
    return game.rollAccumulator[rollIndex] + game.rollAccumulator[rollIndex + 1] === 10;
  };

  function getStrikeScore() {
    if (typeof game.rollAccumulator[rollIndex + 2] === 'undefined') {
        return 0;
    } 
    else {
      return game.rollAccumulator[rollIndex] + game.rollAccumulator[rollIndex + 1] + game.rollAccumulator[rollIndex + 2];
    }
  };

  function getSpareScore() {
    if (typeof game.rollAccumulator[rollIndex + 2] === 'undefined') {
        return 0;
    } 
    else {
        return game.rollAccumulator[rollIndex] + game.rollAccumulator[rollIndex + 1] + game.rollAccumulator[rollIndex + 2];
    }
  };

  function getNormalScore() {
    return game.rollAccumulator[rollIndex] + game.rollAccumulator[rollIndex + 1];
  };
};