class Scorecard {
  constructor() {
    this.score = 0;
    this.frames= [];
  }
  setScore(frames) {
    if (frames.includes(10)) {
      this.strikeCalculator(frames);
      return this.score;
    }
    this.score = frames.reduce((a, b) => a + b, 0);
    return this.score;
  }
  strikeCalculator(array) {
    array.forEach((number, index, arr) => {
      if (number == 10) {
        this.score += 10;
        this.score += arr[index + 1];
      } else {
        this.score += number;
      }
    });
  }
  addFrame(roll1, roll2) {
    this.frames.push(new Frame(roll1, roll2));
    this.setScore2();
  }
  addOpenFrame(frame) {
    this.score += frame.roll1 + frame.roll2;
  }
  addSpare(frame, index, frames) {
    this.addOpenFrame(frame);
    if (frames[index+1] == undefined) {
      this.score = 'Add another frame.';
    } else {
      this.score += frames[index+1].roll1;
    }
  }
  addStrike(frame, index, frames) {
    this.score += 10;
    if (frames[index+1] == undefined) {
      this.score = 'Add another frame.';
    } else if (frames[index+1].isSpare() == true) {
      this.score += 10;
    } else if (frames[index+1].isStrike() == true && frames[index+2] == undefined) {
      this.score = 'Add another frame.';
    } else if (frames[index+1].isStrike() == true) {
      this.score += 10;
      this.score += frames[index+2].roll1;
    } else {
      this.addOpenFrame(frames[index+1]);
    }
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
  setScore2() {
    this.score = 0;
    this.calculateScore();
  }
}
