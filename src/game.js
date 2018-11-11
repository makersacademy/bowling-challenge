function Game() {
  this.NUMBER_OF_FRAMES = 10;
  this.NUMBER_OF_PINS = 10;
  this.frame = 1;
  this.roll = 1;
  // this.rollsPerFrame = 2;
  this.previousRoll;
  this.scores = new Score();
  this.tenthFrameRolls = [];
  this.gameScore = 0;
  this.previousRolls = [];
}

Game.prototype.addScoreValidation = function (score) {
  if (score > this.NUMBER_OF_PINS) throw new Error("Number of pins in frame cannot be above 10.")
  if (this.frame > this.NUMBER_OF_FRAMES) throw new Error("Cannot add more scores.");
};

Game.prototype.addScore = function (score) {
  this.addScoreValidation(score);
  if (this.frame < 10) {
    if (this.roll === 1) {
      this.startFrame(score);
    } else if (this.roll === 2) {
      this.finishFrame(score);
    }
  } else {
    if (this.roll === 1) {
      this.startFrame(score);
    } else if (this.roll === 2 && this.previousRoll === 10) {
      this.startFrame(score);
    } else if (this.roll === 2 && (score + this.previousRoll === 10)) {
      this.startFrame(score);
    } else if (this.roll === 3) {
      this.startFrame(score);
      this.finishFrame(this.tenthFrameRolls);
    } else {
      this.startFrame(score);
      this.finishFrame(this.tenthFrameRolls);
    }
  }
};

Game.prototype.startFrame = function (score) {
  if (this.frame === 10) {
    this.previousRoll = score;
    this.previousRolls.push(score);
    this.tenthFrameRolls.push(score);
    this.roll++;
  } else {
    if (score === 10) {
      this.pushFrame(score);
      this.nextFrame(score);
    } else {
      this.previousRoll = score;
      this.toggleRoll();
    }
  }
  if (score === 10 && this.frame != 10) {
    this.previousRolls.push(score, 0)
  } else {
    this.previousRolls.push(score)
  }
};

Game.prototype.finishFrame = function ( score ) {
  if (this.frame === 10) {
    this.pushFrame(this.tenthFrameRolls);
    this.roll === 1;
    this.nextFrame(score);
  } else {
    if ((this.previousRoll + score) > this.NUMBER_OF_PINS) throw new Error("Number of pins in frame cannot be above 10.")
    this.pushFrame(score);
    this.toggleRoll();
    this.nextFrame(score);
  }
  if (score === 10 && this.frame != 10) {
    this.previousRolls.push(score, 0)
  } else {
    this.previousRolls.push(score)
  }
};

Game.prototype.nextFrame = function (score) {
  this.frame++;
  this.previousRoll = score;
};

Game.prototype.pushFrame = function (score) {
  if (this.frame === 10) {
    frame = new Frame(score);
    this.scores.array.push(frame);
  } else if (this.frame === 1 && score === 10) {
    frame = new Frame([score]);
    this.scores.array.push(frame);
  } else if (score === 10) {
    frame = new Frame([score]);
    this.scores.array.push(frame);
  } else {
    frame = new Frame([this.previousRoll, score]);
    this.scores.array.push(frame);
  }
};

Game.prototype.toggleRoll = function () {
  if (this.roll === 1) {
    this.roll = 2;
  } else if (this.roll === 2) {
    this.roll = 1;
  }
};

// Score controls

Game.prototype.calculateFrameScore = function () {
  this.scores.calculateFrameScore();
};

Game.prototype.calculateBonus = function () {
  this.scores.calculateBonus();
};

Game.prototype.frameTotalScore = function () {
  this.scores.frameTotalScore();
};

Game.prototype.gameTotalScore = function () {
  this.scores.gameTotalScore();
  this.gameScore = this.scores.gameScore;
};

Game.prototype.isGutterGame = function () {
  return this.scores.isGutterGame();
};

Game.prototype.isPerfectGame = function () {
  return this.scores.isPerfectGame();
};
