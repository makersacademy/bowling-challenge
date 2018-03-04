function Game() {
  this.frames = [];
  this.totalScore = 0;
}

Game.prototype.addFrame = function addFrame(frame) {
  this.frames.push(frame);
};

Game.prototype.finalScore = function finalScore() {
  this.totalScore = 0;

  this.frames.forEach((frame, index, frames) => {
    if (frame.rolls.length === 3) {
      this.totalScore += frame.rolls[0].roll + frame.rolls[1].roll + frame.rolls[2].roll;
    } else if (frame.strike === true) {
      if (frames[index + 1] !== undefined) {
        if (frames[index + 1].strike === true) {
          this.totalScore += frame.rolls[0].roll;
          this.totalScore += frames[index + 1].rolls[0].roll;

          if (frames[index + 2] !== undefined) {
            this.totalScore += frames[index + 2].rolls[0].roll;
          }
        } else {
          this.totalScore += frame.rolls[0].roll;
          this.totalScore += frames[index + 1].rolls[0].roll + frames[index + 1].rolls[1].roll;
        }
      }
    } else if (frame.spare === true) {
      this.totalScore += frame.rolls[0].roll + frame.rolls[1].roll;

      if (frames[index + 1] !== undefined) {
        this.totalScore += frames[index + 1].rolls[0].roll;
      }
    } else {
      this.totalScore += frame.rolls[0].roll + frame.rolls[1].roll;
    }
  });

  return this.totalScore;
};
