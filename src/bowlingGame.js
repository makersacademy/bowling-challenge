function bowlingGame() {
  this.pinfall = [];
  this.ballRoll = 0;
  this.result = 0;
  this.STRIKE = 10;
  this.SPARE = 10;
  this.FRAME = 10;
}

bowlingGame.prototype.roll = function(pins) {
  this.pinfall.push(pins);
};

bowlingGame.prototype.isStrike = function() {
  return this.pinfall[this.ballRoll] === this.STRIKE;
};

bowlingGame.prototype.addStrikeScore = function() {
  this.result += this.pinfall[this.ballRoll] + this.pinfall[this.ballRoll + 1] + this.pinfall[this.ballRoll + 2];
  this.ballRoll += 1;
};

bowlingGame.prototype.addStandardScore = function() {
  this.result += this.pinfall[this.ballRoll] + this.pinfall[this.ballRoll + 1];
  this.ballRoll += 2;
};

bowlingGame.prototype.isSpare = function() {
  return this.pinfall[this.ballRoll] + this.pinfall[this.ballRoll + 1] === this.SPARE;
};

bowlingGame.prototype.addSpareScore = function() {
  this.result += this.pinfall[this.ballRoll + 2];
};

bowlingGame.prototype.calculateScore = function() {
  for (var frameIndex = 0; frameIndex < this.FRAME; frameIndex++) {

    if (this.isStrike()) {
      this.addStrikeScore();
    } else {
      if (this.isSpare()) {
          this.addSpareScore();
      }
      this.addStandardScore();
    }
  }
};

bowlingGame.prototype.score = function() {
  this.calculateScore();
  return this.result;
};
