class Scorecard2 {
  constructor() {
    this.score = 0;
    this.rolls = [];
    this.frames= [];
    this.TEN_FRAMES = 10;
  }
  addRoll(score) {
    this.rolls.push(score);
    if (this.rolls.length === 2) {
      this.addFrame(new Frame(this.rolls[0], this.rolls[1]));
      this.rolls = [];
    }
    if (score === 10) {
      this.addFrame(new Frame(10));
      this.rolls = [];
    }
  }
  addFrame(frame) {
    if (this.frames.length >= this.TEN_FRAMES) {
      this.finalframes(frame.roll2);
    }
    this.frames.push(frame);
    this.setScore();
  }
  setScore() {
    this.score = 0;
    this.calculateScore();
  }
  calculateScore() {
    this.frames.forEach((frame, frameNumber, frames) => {
      // this ensures rolls after the 10th frame
      // are only counted for bonus points.
      if (frameNumber < this.TEN_FRAMES) {
        this.scoreLogic(frame, frameNumber, frames);
      }
    });
  }
  scoreLogic(frame, frameNumber, frames) {
    if (frame.isSpare()) {
      this.addSpare(frame, frameNumber, frames);
    } else if (frame.isStrike()) {
      this.addStrike(frame, frameNumber, frames);
    } else {
      this.addOpenFrame(frame);
    }
  }
  addSpare(frame, frameNumber, frames) {
    this.addOpenFrame(frame);
    if (this.nextRollIsUndefined(frameNumber, frames)) {
    } else {
      this.score += frames[frameNumber+1].roll1;
    }
  }
  addStrike(frame, frameNumber, frames) {
    this.score += 10;
    if (this.nextRollIsUndefined(frameNumber, frames)) {
      this.score = 'Add another frame.';
    } else if (this.nextRollIsSpare(frameNumber, frames)) {
      this.score += 10;
    } else if (this.rollAfterNextIsUndefined(frameNumber, frames)) {
      this.score = 'Add another frame.';
    } else if (this.nextRollIsStrike(frameNumber, frames)) {
      this.score += 10;
      this.score += frames[frameNumber+2].roll1;
    } else {
      this.addOpenFrame(frames[frameNumber+1]);
    }
  }
  addOpenFrame(frame) {
    this.score += frame.roll1 + frame.roll2;
  }
  nextRollIsUndefined(frameNumber, frames) {
    if (this.frames.length == frameNumber+1) {
      return true;
    }
  }
  nextRollIsSpare(frameNumber, frames) {
    if (frames[frameNumber+1].isSpare()) {
      return true;
    }
  }
  rollAfterNextIsUndefined(frameNumber, frames) {
    if (frames[frameNumber+1].isStrike() &&
    this.frames.length == frameNumber+2) {
      return true;
    }
  }
  nextRollIsStrike(frameNumber, frames) {
    if (frames[frameNumber+1].isStrike()) {
      return true;
    }
  }
  finalframes(roll2) {
    this.isGameComplete();
    this.correctNumberOfRolls(roll2);
  }
  isGameComplete() {
    const numberOfFrames = this.frames.length;
    const previousFrame = this.frames[numberOfFrames-1];
    const frameBeforeLast = this.frames[numberOfFrames-2];

    if (numberOfFrames == this.TEN_FRAMES &&
    previousFrame.isOpenFrame()) {
      throw new Error('Game complete!');
    }
    if (numberOfFrames == this.TEN_FRAMES+1 &&
      previousFrame.isSpare()) {
      throw new Error('Game complete!');
    }
    if (numberOfFrames == this.TEN_FRAMES+1 &&
      frameBeforeLast.isSpare()) {
      throw new Error('Game complete!');
    }
    if (numberOfFrames == this.TEN_FRAMES+2) {
      throw new Error('Game complete!');
    }
  }
  correctNumberOfRolls(roll2) {
    const numberOfFrames = this.frames.length;
    const previousFrame = this.frames[numberOfFrames-1];

    if (numberOfFrames == this.TEN_FRAMES &&
    previousFrame.isSpare() &&
    roll2 > 0) {
      throw new Error('Cannot add 2 rolls.');
    }
    if (numberOfFrames == this.TEN_FRAMES+1 &&
      previousFrame.isStrike() &&
      roll2 > 0) {
      throw new Error('Cannot add 2 rolls.');
    }
  }
}
