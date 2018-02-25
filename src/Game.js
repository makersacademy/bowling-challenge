function Game() {
  this.frames = [];
  this.totalScore = 0;
}

Game.prototype.addFrame = function addFrame(frame) {
  // Check no more than 10 frames
  // Check 10th frame special case
  this.frames.push(frame);
};

Game.prototype.finalScore = function finalScore() {
  this.frames.forEach((frame, index, frames) => {
    if (frame.strike === true) {
      this.totalScore += frame.rolls[0].roll + frame.rolls[1].roll;
      this.totalScore += frames[index + 1].rolls[0].roll + frames[index + 1].rolls[1].roll;
    } else if (frame.spare === true) {
      this.totalScore += frame.rolls[0].roll + frame.rolls[1].roll;
      this.totalScore += frames[index + 1].rolls[0].roll;
    } else {
      this.totalScore += frame.rolls[0].roll + frame.rolls[1].roll;
    }
  });

  return this.totalScore;
};

// PRIVATE METHODS
// Define Strike and Spare methods here... finalScore method is massive
