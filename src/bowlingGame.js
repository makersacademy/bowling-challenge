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

bowlingGame.prototype.calculateStrikeScore = function() {
  return this.pinfall[this.ballRoll] + this.pinfall[this.ballRoll + 1] + this.pinfall[this.ballRoll + 2];
};

bowlingGame.prototype.addStrikeScore = function() {
  if (!isNaN(this.calculateStrikeScore())) {
    this.result += this.calculateStrikeScore();
    this.ballRoll += 1;
  }
  // this.result += this.pinfall[this.ballRoll] + this.pinfall[this.ballRoll + 1] + this.pinfall[this.ballRoll + 2];
  // this.ballRoll += 1;
};

bowlingGame.prototype.calculateStandardScore = function() {
  return this.pinfall[this.ballRoll] + this.pinfall[this.ballRoll + 1];
};

bowlingGame.prototype.addStandardScore = function() {
  if (!isNaN(this.calculateStandardScore())) {
    this.result += this.calculateStandardScore();
    this.ballRoll += 2;
  }
  // this.result += this.pinfall[this.ballRoll] + this.pinfall[this.ballRoll + 1];

};

bowlingGame.prototype.isSpare = function() {
  return this.pinfall[this.ballRoll] + this.pinfall[this.ballRoll + 1] === this.SPARE;
};

bowlingGame.prototype.calculateSpareScore = function() {
  return this.pinfall[this.ballRoll + 2];
};

bowlingGame.prototype.addSpareScore = function() {
  if (!isNaN(this.calculateSpareScore())) {
    this.result += this.calculateSpareScore();
  }

  // this.result += this.pinfall[this.ballRoll + 2];
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

// bowlingGame.prototype.score = function() {
//   if (this.isStrike()) {
//     this.addStrikeScore();
//   } else {
//     if (this.isSpare()) {
//         this.addSpareScore();
//     }
//     this.addStandardScore();
//   }
//   return this.result;
// };

bowlingGame.prototype.finalScore = function() {
  this.calculateScore();
  return this.result;
};
