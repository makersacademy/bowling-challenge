function Game() {
  this.NUMBER_OF_FRAMES = 10;
  this.NUMBER_OF_PINS = 10;
  this.frame = 1;
  this.roll = 1;
  this.rollsPerFrame = 2;
  this.previousRoll = 0;
  this.scores = [];
}

Game.prototype.addScore = function ( score ) {
  if (this.scores.length === this.NUMBER_OF_FRAMES) throw new Error("Cannot add more scores.");
  if (this.roll === 1) {
    this.startFrame(score);
  } else if (this.roll === 2) {
    this.finishFrame(score);
  }
};

Game.prototype.startFrame = function ( score ) {
  if (score === 10) {
    this.pushFrame(score);
    this.nextFrame(score);
  } else {
    this.previousRoll = score;
    this.toggleRoll();
  }
};

Game.prototype.finishFrame = function ( score ) {
  if ((this.previousRoll + score) > this.NUMBER_OF_PINS) throw new Error("Number of pins in frame cannot be above 10.")
  this.pushFrame(score);
  this.toggleRoll();
  this.nextFrame(score);
};

Game.prototype.nextFrame = function (score) {
  this.frame++;
  this.previousRoll = score;
};

Game.prototype.pushFrame = function (score) {
  if (score === 10) {
    frame = new Frame([score]);
    this.scores.push(frame);
  } else {
    frame = new Frame([this.previousRoll, score]);
    this.scores.push(frame);
  }
};

Game.prototype.toggleRoll = function () {
  if (this.roll === 1) {
    this.roll = 2;
  } else if (this.roll === 2) {
    this.roll = 1;
  }
};

Game.prototype.calculateBonus = function () {
  for (i = 0; i < this.scores.length; i++) {
    if (this.scores[i].isSpare) {
      this.scores[i].bonus = this.scores[i + 1].roll1;
    } else if (this.scores[i].isStrike) {
      this.scores[i].bonus += 10;
      this.scores[i].bonus += this.scores[i + 1].roll1 + this.scores[i + 1].roll2;
    }
  }
};
