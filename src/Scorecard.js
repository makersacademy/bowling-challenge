class Scorecard {
  constructor() {
    this.score = 0;
    this.frames= [];
  }
  addFrame(roll1, roll2) {
    this.frames.push(new Frame(roll1, roll2));
    this.setScore();
  }
  addOpenFrame(frame) {
    this.score += frame.roll1 + frame.roll2;
  }
  addSpare(frame, index, frames) {
    this.addOpenFrame(frame);
    if (this.nextRollIsUndefined(index, frames)) {
      this.score = 'Add another frame.';
    } else {
      this.score += frames[index+1].roll1;
    }
  }
  addStrike(frame, index, frames) {
    this.score += 10;
    if (this.nextRollIsUndefined(index, frames)) {
      this.score = 'Add another frame.';
    } else if (this.nextRollIsSpare(index, frames)) {
      this.score += 10;
    } else if (this.rollAfterNextIsUndefined(index, frames)) {
      this.score = 'Add another frame.';
    } else if (this.nextRollIsStrike(index, frames)) {
      this.score += 10;
      this.score += frames[index+2].roll1;
    } else {
      this.addOpenFrame(frames[index+1]);
    }
  }
  nextRollIsUndefined(index, frames) {
    return frames[index+1] == undefined;
  }
  nextRollIsSpare(index, frames) {
    return frames[index+1].isSpare();
  }
  rollAfterNextIsUndefined(index, frames) {
    return frames[index+1].isStrike() && frames[index+2] == undefined;
  }
  nextRollIsStrike(index, frames) {
    return frames[index+1].isStrike();
  }
  calculateScore() {
    this.frames.forEach((frame, index, frames) => {
      this.scoreLogic(frame, index, frames);
    });
  }
  scoreLogic(frame, index, frames) {
    if (frame.isSpare() == true) {
      this.addSpare(frame, index, frames);
    } else if (frame.isStrike() == true) {
      this.addStrike(frame, index, frames);
    } else {
      this.addOpenFrame(frame);
    }
  }
  setScore() {
    this.score = 0;
    this.calculateScore();
  }
}
