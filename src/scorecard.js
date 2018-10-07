function Scorecard(NormalFrame, FinalFrame) {
  this.NormalFrame = NormalFrame;
  this.FinalFrame = FinalFrame;
  this.frames = [];
  this.scores = [];
  this.currentFrame = 0;
  this.initFrames();
  this.gameOver = false;
}

Scorecard.prototype.initFrames = function initFrames() {
  for (let i = 0; i < 9; i += 1) {
    this.frames.push(new this.NormalFrame());
  }
  this.frames.push(new this.FinalFrame());
};

Scorecard.prototype.roll = function roll(score) {
  if (this.gameOver === true) {
    throw new Error('The game has ended.');
  }
  this.enterRoll(score);
};

Scorecard.prototype.enterRoll = function enterRoll(score) {
  const currentFrame = this.frames[this.currentFrame];
  currentFrame.roll.call(currentFrame, score);
  this.updateCurrentFrame();
};

Scorecard.prototype.updateCurrentFrame = function updateCurrentFrame() {
  const currentFrame = this.frames[this.currentFrame];
  if (currentFrame.over === true) {
    if (this.currentFrame === 9) {
      this.gameOver = true;
    } else {
      this.currentFrame += 1;
    }
  } else {
    return false;
  }
};

Scorecard.prototype.calculateFrameScore = function calculateFrameScore(index) {
  if (index === 9) {
    return this.calculateFinalFrame();
  }
  if (this.frames[index].spare === true) {
    return this.calculateSpareScore(index);
  }
  if (this.frames[index].strike === true) {
    return this.calculateStrikeScore(index);
  }
  return (this.frames[index].rolls[0] || 0)
    + (this.frames[index].rolls[1] || 0);
};

Scorecard.prototype.calculateSpareScore = function calculateSpareScore(index) {
  return 10 + (this.frames[index + 1].rolls[0] || 0);
};

Scorecard.prototype.calculateStrikeScore = function calculateStrikeScore(index) {
  if (index === 8) {
    return 10 + (this.frames[9].rolls[0] || 0) + (this.frames[9].rolls[1] || 0);
  }
  if (this.frames[index + 1].strike === true) {
    return 20 + (this.frames[index + 2].rolls[0] || 0);
  }
  return 10 + (this.frames[index + 1].rolls[0] || 0)
    + (this.frames[index + 1].rolls[1] || 0);
};

Scorecard.prototype.calculateFinalFrame = function calculateFinalFrame() {
  return this.frames[9].calculateScore.call(this.frames[9]);
};

Scorecard.prototype.allFrameScores = function allFrameScores() {
  const output = [];
  for (let i = 0; i < 10; i += 1) {
    output.push(this.calculateFrameScore(i));
  }
  return output;
};

Scorecard.prototype.totalScore = function totalScore() {
  let output = 0;
  for (let i = 0; i < 10; i += 1) {
    output += this.calculateFrameScore(i);
  }
  return output;
};

// Export node module.
if (typeof module !== 'undefined' && module.hasOwnProperty('exports')) {
  module.exports = Scorecard;
}
