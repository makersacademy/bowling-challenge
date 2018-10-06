function Scorecard(normalFrame, finalFrame) {
  this.normalFrame = normalFrame;
  this.finalFrame = finalFrame;
  this.frames = [];
  this.scores = [];
  this.currentFrame = 0;
  this.initFrames()
  this.gameOver = false
}

Scorecard.prototype.initFrames = function initFrames() {
  for (var i = 0; i < 9; i++) {
    this.frames.push(new this.normalFrame());
  }
  this.frames.push(new this.finalFrame());
};

Scorecard.prototype.roll = function roll(score) {
  if (this.gameOver === true) {
    throw new Error("The game has ended.")
  }
  this.enterRoll(score);
};

Scorecard.prototype.enterRoll = function enterRoll(score) {
  currentFrame = this.frames[this.currentFrame];
  currentFrame.roll.call(currentFrame, score);
  this.updateCurrentFrame();
};

Scorecard.prototype.updateCurrentFrame = function updateCurrentFrame() {
  currentFrame = this.frames[this.currentFrame];
  if (currentFrame.over === true) {
    if (this.currentFrame === 9) {
      this.gameOver = true;
    }
    else {
      this.currentFrame++;
    }
  }
};

Scorecard.prototype.calculateFrameScore = function calculateFrameScore(index) {
  if (index === 9) {
    return this.calculateFinalFrame();
  }
  if (this.frames[index].spare === true){
    return this.calculateSpareScore(index);
  } else if (this.frames[index].strike === true) {
    return this.calculateStrikeScore(index);
  } else {
    return this.frames[index].rolls[0] + this.frames[index].rolls[1];
  }
};

Scorecard.prototype.calculateSpareScore = function calculateSpareScore(index) {
  return 10 + this.frames[index + 1].rolls[0];
};

Scorecard.prototype.calculateStrikeScore = function calculateStrikeScore(index) {
  if (index === 8){
    return 10 + this.frames[9].rolls[0] + this.frames[9].rolls[0];
  } else {
    if (this.frames[index + 1].strike === true) {
      return 20 + this.frames[index + 2].rolls[0];
    } else {
      return 10 + + this.frames[index + 1].rolls[0]
        + this.frames[index + 1].rolls[1];
    }
  }
};

Scorecard.prototype.calculateFinalFrame = function calculateFinalFrame() {
  return this.frames[9].calculateScore.call(this.frames[9]);
};

Scorecard.prototype.allFrameScores = function allFrameScores() {
  output = []
  for (var i = 0; i < 10; i++) {
    output.push(this.calculateFrameScore(i));
  }
  return output;
};
