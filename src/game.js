function Game() {
  this.NUMBER_OF_FRAMES = 10;
  this.NUMBER_OF_PINS = 10;
  this.frame = 1;
  this.roll = 1;
  this.rollsPerFrame = 2;
  this.previousRoll;
  this.scores = [];
  this.tenthFrameRolls = [];
}

Game.prototype.addScore = function ( score ) {
  if (this.frame === 11) throw new Error("Cannot add more scores.");
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

Game.prototype.startFrame = function ( score ) {
  if (this.frame === 10) {
    this.previousRoll = score;
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
};

Game.prototype.nextFrame = function (score) {
  this.frame++;
  this.previousRoll = score;
};

Game.prototype.pushFrame = function (score) {
  if (this.frame === 10) {
    frame = new Frame(score);
    this.scores.push(frame);
  } else if (this.frame === 1 && score === 10) {
    frame = new Frame([score]);
    this.scores.push(frame);
  } else if (score === 10) {
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
      if (this.scores[i + 1].roll2 === undefined) {
        this.scores[i].bonus += this.scores[i + 1].roll1 + this.scores[i + 2].roll1;
      } else {
        this.scores[i].bonus += this.scores[i + 1].roll1 + this.scores[i + 1].roll2;
      }
    }
  }
};

Game.prototype.isGutterGame = function () {
  for (var i = 0; i < this.scores.length; i++) {
    if (this.scores[i].score > 0) return false;
  }
  return true;
};

Game.prototype.isPerfectGame = function () {
  for (var i = 0; i < this.scores.length; i++) {
    if (this.scores[i].isStrike === undefined) return false;
  }
  if (this.scores[9].roll2 != 10) return false;
  if (this.scores[9].roll3 != 10) return false;
  return true;
};

Game.prototype.endGame = function () {
  score = new Score(this.scores);
};
