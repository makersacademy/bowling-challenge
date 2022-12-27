class Scoreboard {
  constructor() {
    this.scoreboard = [];
    this.frame_count = 0;
    this.sum = 0;
  }

  addFrame(frame) {
    this.frame_array = frame.accessFrame();
    this.roll1 = frame.roll1();
    this.roll2 = frame.roll2();
    this.checkForFails();
    this.scoreboard.push(frame);
    this.frame_count++;
  }

  checkForFails() {
    if (this.roll1 > 10 || this.roll2 > 10) {
      throw 'A roll cannot be greater than 10';
    }
    if (this.frame_count < 9) {
      if (this.roll1 + this.roll2 > 10) {
        throw 'Sum of rolls cannot be greater than 10';
      }
    } else {
      if (this.roll1 != 10 && this.roll2 != 10) {
        if (this.roll1 + this.roll2 > 10) {
          throw 'Sum of rolls cannot be greater than 10';
        }
      } else if (this.roll2 != 10 && this.frame_array[2] != 10) {
        if (this.roll2 + this.frame_array[2] > 10) {
          throw 'Sum of rolls cannot be greater than 10';
        }
      }
    }
  }

  frameCount() {
    return this.frame_count;
  }

  calculateLastFrame() {
    const lastFrame = this.scoreboard[9];
    return (this.frame_count === 10 ? lastFrame.frameTotal() : 0);
  }

  calculateFramesTotal() {
    let index = 0;
    const normalFrames = this.scoreboard.slice(0, 9);
    normalFrames.forEach((frame) => {
      const frame1 = this.scoreboard[index + 1];
      const frame2 = this.scoreboard[index + 2];
      if (frame.checkForSpare()) {
        this.sum += frame.frameTotal() + frame1.roll1();
      } else if (frame.checkForStrike()) {
        this.sum += frame.frameTotal();
        if (frame1.checkForStrike()) {
          this.sum += (index === 8 ? frame1.roll1() + frame1.roll2() : frame1.roll1() + frame2.roll1());
        } else {
          this.sum += frame1.roll1() + frame1.roll2();
        }
      } else {
        this.sum += frame.frameTotal();
      }
      index++;
    });
    return this.sum;
  }

  total() {
    this.sum += this.calculateFramesTotal();
    this.sum += this.calculateLastFrame();
    return this.sum;
  }
}

module.exports = Scoreboard;
