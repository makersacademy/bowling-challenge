class Scorecard {
  constructor() {
    this.score = 0;
    this.frames= [];
  }
  addFrame(frame) {
    this.isGameComplete();
    this.tooManyRolls(frame.roll2);
    this.frames.push(frame);
    this.setScore();
  }
  setScore() {
    this.score = 0;
    this.calculateScore();
  }
  calculateScore() {
    this.frames.forEach((frame, index, frames) => {
      if (index < 10) {
        this.scoreLogic(frame, index, frames);
      }
    });
  }
  scoreLogic(frame, index, frames) {
    if (frame.isSpare()) {
      this.addSpare(frame, index, frames);
    } else if (frame.isStrike()) {
      this.addStrike(frame, index, frames);
    } else {
      this.addOpenFrame(frame);
    }
  }
  addSpare(frame, index, frames) {
    this.addOpenFrame(frame);
    if (this.nextRollIsUndefined(index, frames)) {
    } else {
      this.score += frames[index+1].roll1;
    }
  }
  addStrike(frame, index, frames) {
    this.score += 10;
    if (this.nextRollIsUndefined(index, frames)) {
    } else if (this.nextRollIsSpare(index, frames)) {
    } else if (this.rollAfterNextIsUndefined(index, frames)) {
    } else if (this.nextRollIsStrike(index, frames)) {
    } else {
      this.addOpenFrame(frames[index+1]);
    }
  }
  addOpenFrame(frame) {
    this.score += frame.roll1 + frame.roll2;
  }
  nextRollIsUndefined(index, frames) {
    if (frames[index+1] == undefined) {
      this.score = 'Add another frame.';
      return true;
    }
  }
  nextRollIsSpare(index, frames) {
    if (frames[index+1].isSpare()) {
      this.score += 10;
      return true;
    }
  }
  rollAfterNextIsUndefined(index, frames) {
    if (frames[index+1].isStrike() && frames[index+2] == undefined) {
      this.score = 'Add another frame.';
      return true;
    }
  }
  nextRollIsStrike(index, frames) {
    if (frames[index+1].isStrike()) {
      this.score += 10;
      this.score += frames[index+2].roll1;
      return true;
    }
  }
  isGameComplete() {
    const numberOfFrames = this.frames.length;
    const previousFrame = this.frames[numberOfFrames-1];
    const frameBeforeLast = this.frames[numberOfFrames-2];

    if (numberOfFrames == 10 &&
    previousFrame.isOpenFrame() ||
    numberOfFrames == 11 &&
    (previousFrame.isSpare() ||
    frameBeforeLast.isSpare()) ||
    numberOfFrames == 12) {
      throw new Error('Game complete!');
    }
  }
  tooManyRolls(roll2) {
    const numberOfFrames = this.frames.length;
    const previousFrame = this.frames[numberOfFrames-1];

    if (numberOfFrames == 10 &&
    previousFrame.isSpare() &&
    roll2 > 0 ||
    numberOfFrames == 11 &&
    previousFrame.isStrike() &&
    roll2 > 0) {
      throw new Error('Cannot add 2 rolls.');
    }
  }
}
