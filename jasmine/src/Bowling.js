function Bowling(score) {
  this.frames = {};
  this.currentFrame = 1;
  this.score = score;
};

Bowling.prototype.pinsHit = function(number) {
  this.createFrame();
  if (this.isGameOver()) {
    throw new Error("Game Over");
  }
  if (this.isOverTen(number) && this.currentFrame < 10) {
    throw new Error("There are only 10 pins");
  }
  this.frames[this.currentFrame].push(number);
  if (this.currentFrame === 10) {
    if (this.frames[10].length == 2) {
      if (score.isStrike(this.frames[10])) {
      } else if (score.isSpare(this.frames[10])) {
      } else {
        this.currentFrame ++;
      }
    } else if (this.frames[10].length == 3) {this.currentFrame ++;}
  } else {
    this.strikeCorrector()
    if (this.isFrameFull()) {this.currentFrame ++}
  }
};

Bowling.prototype.createFrame = function() {
  if (!(this.currentFrame in this.frames)) {
    this.frames[this.currentFrame] = [];
  };
};

Bowling.prototype.isFrameFull = function() {
  return (this.frames[this.currentFrame].length == 2);
};


Bowling.prototype.isGameOver = function() {
  return (this.currentFrame === 11);
};

Bowling.prototype.isOverTen = function(number) {
  if (this.frames[this.currentFrame].length === 0) {
    if (number > 10 ){return true;}
    return false;
  } else {
    sum = this.frames[this.currentFrame][0] + number;
    return (sum > 10);
  }
};

Bowling.prototype.calculateScore = function() {
  return this.score.calculate(this.frames, this.currentFrame);
};

Bowling.prototype.strikeCorrector = function() {
  if (this.frames[this.currentFrame][0] === 10) {
    this.frames[this.currentFrame].push(0);
  }
};
