function BowlingGame() {
  this.frameRolls = [];
  this.frameScores = [];
}

BowlingGame.prototype.rolls = function() {
  return this.frameRolls;
}

BowlingGame.prototype.setLastFrame = function(frame_result) {
  this.lastFrame = frame_result;
}

BowlingGame.prototype.lastFrame = function() {
  return this.lastFrame
}

BowlingGame.prototype.setLastRoll = function(numberOfPins) {
  this.lastRoll = numberOfPins;
}

BowlingGame.prototype.lastRoll = function() {
  return this.lastRoll;
}

BowlingGame.prototype.firstRoll = function(numberOfPins) {
  if (numberOfPins === 10) {
    this.setLastFrame("Strike");
    this.frameRolls.push([numberOfPins, 0])
  };
  this.firstRoll = numberOfPins;
}

BowlingGame.prototype.secondRoll = function(numberOfPins) {
  if ((this.firstRoll + numberOfPins) === 10) {
    this.setLastFrame("Spare");
    this.frameRolls.push([this.firstRoll, numberOfPins]);
  } else {
    this.frameRolls.push([this.firstRoll, numberOfPins]);
    this.frameScores.push(this.lastFrameScore());
  }
}

BowlingGame.prototype.lastFrameScore = function() {
  const reducer = (accumulator, currentValue) => accumulator + currentValue;
  score = this.frameRolls[this.frameRolls.length - 1].reduce(reducer);
  return score;
}
