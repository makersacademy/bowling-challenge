const Frame = require("./frame");

module.exports = class Game {
  constructor(frameClass = Frame) {
    this.frames = [];
    this.frameClass = frameClass;
    this.totalScore = 0;
    this.addNewFrame();
    this.MAX_FRAMES = 10;
  }

  numOfFrames() {
    return this.frames.length;
  }

  addNewFrame() {
    this.frames.push(new this.frameClass());
  }

  lastFrame() {
    return this.frames[this.frames.length - 1];
  }

  previous_frame() {
    if (!this.frames.length < 2) {
      return this.frames[this.frames.length - 2];
    }
  }

  next_frame(index) {
    return this.frames[index + 1];
  }

  next_to_next_frame(index) {
    return this.frames[index + 2];
  }

  isNinthFrame(index) {
    return index === this.MAX_FRAMES - 2;
  }

  strikeBonus(index) {
    if (this.isFinalFrame(index)) {
      return 0;
    } else if (this.isNinthFrame(index)) {
      return this.next_frame(index).firstTwoRolls();
    } else {
      if (this.next_frame(index).isStrike()) {
        return (
          this.next_frame(index).frameScore() +
          this.next_to_next_frame(index).firstRoll()
        );
      } else {
        return this.next_frame(index).frameScore();
      }
    }
  }

  spareBonus(index) {
    if (this.isFinalFrame(index)) {
      return 0;
    } else {
      return this.next_frame(index).firstRoll();
    }
  }

  score() {
    this.totalScore = 0;
    this.frames.forEach((frame, index) => {
      if (frame.isStrike()) {
        this.totalScore += frame.frameScore() + this.strikeBonus(index);
      } else if (frame.isSpare()) {
        this.totalScore += frame.frameScore() + this.spareBonus(index);
      } else {
        this.totalScore += frame.frameScore();
      }
    });
    return this.totalScore;
  }

  gameOver() {
    return this.frames.length > this.MAX_FRAMES;
  }

  isLastFrame() {
    this.frames.length === this.MAX_FRAMES - 1;
  }

  isFinalFrameInput() {
    return this.frames.length == this.MAX_FRAMES;
  }

  isFinalFrame(index) {
    return index == this.MAX_FRAMES - 1;
  }

  bowl(pins) {
    if (this.lastFrame().isClosed(this.isFinalFrameInput())) {
      this.addNewFrame();
      this.lastFrame().roll(pins);
    } else {
      this.lastFrame().roll(pins);
    }
  }
};
