function bowlingGame() {
  this.pinfall = [];
  this.ballRoll = 0;
  this.result = 0;
  this.STRIKE = 10;
  this.SPARE = 10;
  this.FRAME = 10;
  this.currentFrame = 0;
  this.SECOND_ROLL = 1;
  this.THIRD_ROLL = 2;
  this.NEXT_FRAME = 1;
}

bowlingGame.prototype.roll = function(pins) {
  if (this.currentFrame === this.FRAME) {
    return 'game over';
  }else{
  this.pinfall.push(pins);
  return this.score();
  }
};

bowlingGame.prototype.isStrike = function() {
  return this.pinfall[this.ballRoll] === this.STRIKE;
};

bowlingGame.prototype.calculateBonusScore = function() {
  return this.pinfall[this.ballRoll] + this.pinfall[this.ballRoll + this.SECOND_ROLL] + this.pinfall[this.ballRoll + this.THIRD_ROLL];
};

bowlingGame.prototype.addStrikeScore = function() {
  if (!isNaN(this.calculateBonusScore())) {
    this.result += this.calculateBonusScore();
    this.ballRoll += 1;
    this.currentFrame += this.NEXT_FRAME;
  }
};

bowlingGame.prototype.calculateStandardScore = function() {
  return this.pinfall[this.ballRoll] + this.pinfall[this.ballRoll + this.SECOND_ROLL];
};

bowlingGame.prototype.addStandardScore = function() {
  if (!isNaN(this.calculateStandardScore())) {
    this.result += this.calculateStandardScore();
    this.ballRoll += 2;
    this.currentFrame += this.NEXT_FRAME;
  }
};

bowlingGame.prototype.isSpare = function() {
  return this.pinfall[this.ballRoll] + this.pinfall[this.ballRoll + this.SECOND_ROLL] === this.SPARE;
};

bowlingGame.prototype.addSpareScore = function() {
  if (!isNaN(this.calculateBonusScore())) {
    this.result += this.calculateBonusScore();
    this.ballRoll += 2;
    this.currentFrame += this.NEXT_FRAME;
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

bowlingGame.prototype.score = function() {
  this.calculateScore();
  return this.result;
};
