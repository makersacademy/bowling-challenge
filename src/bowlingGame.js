function bowlingGame() {
  this.pinfall = [];
  this.ballRoll = 0;
  this.result = 0;
  this.STRIKE = 10;
  this.SPARE = 10;
  this.FRAME = 10;
  this.currentFrame = 0;
}

bowlingGame.prototype.roll = function(pins) {
  if (this.currentFrame === 10) {
    return 'game over';
  }else{
  this.pinfall.push(pins);
  this.finalScore();
}
};

bowlingGame.prototype.isStrike = function() {
  return this.pinfall[this.ballRoll] === this.STRIKE;
};

bowlingGame.prototype.calculateStrikeScore = function() {
  return this.pinfall[this.ballRoll] + this.pinfall[this.ballRoll + 1] + this.pinfall[this.ballRoll + 2];
};

bowlingGame.prototype.addStrikeScore = function() {
  if (!isNaN(this.calculateStrikeScore())) {
    this.result += this.calculateStrikeScore();
    this.ballRoll += 1;
    this.currentFrame += 1;
  }
};

bowlingGame.prototype.calculateStandardScore = function() {
  return this.pinfall[this.ballRoll] + this.pinfall[this.ballRoll + 1];
};

bowlingGame.prototype.addStandardScore = function() {
  if (!isNaN(this.calculateStandardScore())) {
    this.result += this.calculateStandardScore();
    this.ballRoll += 2;
    this.currentFrame += 1;
  }
};

bowlingGame.prototype.isSpare = function() {
  return this.pinfall[this.ballRoll] + this.pinfall[this.ballRoll + 1] === this.SPARE;
};

bowlingGame.prototype.calculateSpareScore = function() {
  return this.pinfall[this.ballRoll] + this.pinfall[this.ballRoll + 1] + this.pinfall[this.ballRoll + 2];
};

bowlingGame.prototype.addSpareScore = function() {
  if (!isNaN(this.calculateSpareScore())) {
    this.result += this.calculateSpareScore();
    this.ballRoll += 2;
    this.currentFrame += 1;
  }
};

bowlingGame.prototype.calculateScore = function() {
  for (var frameIndex = 0; frameIndex < this.FRAME; frameIndex++) {

    if (this.isStrike()) {
      this.addStrikeScore();
    } else if (this.isSpare()) {
      this.addSpareScore();
    } else {
      this.addStandardScore();
    }
  }
};

bowlingGame.prototype.finalScore = function() {
  this.calculateScore();
  return this.result;
};
