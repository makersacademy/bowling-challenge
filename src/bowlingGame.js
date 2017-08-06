function bowlingGame() {
  this.pinfall = [];
  this.pinfallIndex = 0;
  this.result = 0;
}

bowlingGame.prototype.roll = function(pins) {
  this.pinfall.push(pins);
};

bowlingGame.prototype.isStrike = function() {
  return this.pinfall[this.pinfallIndex] === 10;
};

bowlingGame.prototype.strikeScore = function() {
  return this.pinfall[this.pinfallIndex] + this.pinfall[this.pinfallIndex + 1] + this.pinfall[this.pinfallIndex + 2];
};

bowlingGame.prototype.standardScore = function() {
  return (this.pinfall[this.pinfallIndex] + this.pinfall[this.pinfallIndex + 1]);
};

bowlingGame.prototype.isSpare = function() {
  return (this.pinfall[this.pinfallIndex] + this.pinfall[this.pinfallIndex + 1] === 10);
};

bowlingGame.prototype.spareScore = function() {
  return this.pinfall[this.pinfallIndex + 2];
};

bowlingGame.prototype.calculateScore = function() {
  for (var frameIndex = 0; frameIndex < 10; frameIndex++) {

    if (this.isStrike()) {
      this.result += this.strikeScore();
      this.pinfallIndex += 1;
    } else {
      this.result += this.standardScore();
      if (this.isSpare()) {
          this.result += this.spareScore();
      }
      this.pinfallIndex += 2;
    }
  }
};

bowlingGame.prototype.score = function() {
  this.calculateScore();

  return this.result;
};
