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
  addBothRolls(frame) {
    this.score += frame.roll1 + frame.roll2;
  }
  calculateSpare(frame, index, frames) {
    this.addBothRolls(frame);
    if (frames[index+1] == undefined) {
      this.score = 'Add another frame.';
    } else {
      this.score += frames[index+1].roll1;
    }
  }
  setScore2() {
    this.score = 0;
    this.frames.forEach((frame, index, frames) => {
      if (frame.isSpare() == true) {
        this.calculateSpare(frame, index, frames);
      } else if (frame.isStrike() == true) {
        this.score += 20;
      } else {
        this.addBothRolls(frame);
      }
    });
  }
}
