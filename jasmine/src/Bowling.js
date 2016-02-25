function Bowling(score) {
  this.frames = {};
  this.currentFrame = 1;
  this.score = score;
};

Bowling.prototype.pinsHit = function(number) {
  this.createFrame();
  this.errors(number);
  this.frames[this.currentFrame].push(number);
  if (this.currentFrame === 10) {
    this.frameTenExtension();
  } else {
    this.strikeCorrector();
    if (this.isFrameFull()) {this.currentFrame ++};
  }
  console.log(this.frames);
};

Bowling.prototype.createFrame = function() {
  if (!(this.currentFrame in this.frames)) {
    this.frames[this.currentFrame] = [];
  };
};

Bowling.prototype.frameTenExtension = function() {
  if (this.isFrameFull()) {
    if (this.score.frameTotal(this.frames[10]) < 10) {
      this.currentFrame ++;
    }
  } else if (this.frames[10].length == 3) {this.currentFrame ++;}
};

Bowling.prototype.errors = function(number) {
  if (this.isGameOver()) {
    throw new Error("Game Over");
  }
  if (this.isOverTen(number) && this.currentFrame < 10) {
    throw new Error("There are only 10 pins");
  }
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
  if ((this.currentFrame in this.frames)) {
    throw new Error('Finish the frame');
  }
  return this.score.calculate(this.frames, this.currentFrame);
};

Bowling.prototype.calculateChosenScore = function(chosenFrame) {
  return this.score.calculate(this.frames, (chosenFrame+1));
};

Bowling.prototype.strikeCorrector = function() {
  if (this.frames[this.currentFrame][0] === 10) {
    this.frames[this.currentFrame].push(0);
  }
};

Bowling.prototype.calculationRoute = function() {
  if (!(this.currentFrame in this.frames)) {
    return this.score.calculate(this.frames, this.currentFrame);
  }
};
