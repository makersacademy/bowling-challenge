function BowlingGame() {
  this.frameRolls = [];
  this.frameScores = [];
}

BowlingGame.prototype.firstRoll = function(numberOfPins) {
  if (numberOfPins === 10) {
    this.lastFrame = "Strike";
    this.frameRolls.push([numberOfPins, 0])
  };
  this.firstRollValue = numberOfPins;
  if (this.lastFrame === "Spare") {
    this.frameScores.push(10 + this.firstRollValue);
  }
}

BowlingGame.prototype.secondRoll = function(numberOfPins) {
  if ((this.firstRollValue + numberOfPins) === 10) {
    this.lastFrame = "Spare";
    this.frameRolls.push([this.firstRollValue, numberOfPins]);
  } else {
    this.frameRolls.push([this.firstRollValue, numberOfPins]);
    this.frameScores.push(this.lastFrameScore());
  }
}

BowlingGame.prototype.lastFrameScore = function() {
  const reducer = (accumulator, currentValue) => accumulator + currentValue;
  score = this.frameRolls[this.frameRolls.length - 1].reduce(reducer);
  return score;
}
