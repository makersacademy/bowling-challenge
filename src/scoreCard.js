"use strict";

class Scorecard {
  constructor() {
    this.frame = [];
    this.frames = [];
    this.total = 0;
    this.score = 0;
    this.roll1 = 0;
    this.roll2 = 0;
    this.previous_frame_index = -2;
    this.previous_frame_score = 0;
    this.frame_ten_score = 0;
    this.roll_twenty_one_pins = 0;
  }

  first_roll(pins) {
    return this.roll1 = pins;
  }

  second_roll(pins) {
    return this.roll2 = pins;
  }

  createFrame() {
    this.frame.push(this.roll1);
      if (this.roll1 === 10) { 
        return this.frame;
      }
      this.frame.push(this.roll2);
    return this.frame;
  }

  addFrame() {
    this.frames.push(this.frame);
    this.previous_frame_index += 1;
    return this.frames;
  }

  countFrameScore() {
    this.score = this.frame.reduce(function(sum, roll) {
      return sum + roll
    }, 0);
    }

  countTotal() {
    this.total += this.score
    return this.total
  }

  countPreviousFrameScore() {
    this.previous_frame_score = this.frames[this.previous_frame_index].reduce(function(sum, roll) {
      return sum + roll
    }, 0);
  }

  addExtraTotal() {
    if (this.previous_frame_score === 10 && this.frames[this.previous_frame_index].legth === 1) { 
      this.total += this.score;
    } else if (this.previous_frame_score === 10) {
      this.total += this.frame[0];
    }
    return this.total;
  }

  emptyFrame() {
    this.frame += [];
    return this.frame;
  }

  countFrameTenScore() {
    this.frame_ten_score = this.frames[9].reduce(function(sum, roll) {
      return sum + roll
    }, 0);
  }

  addRollTwentyOne(pins) {
    if (this.frame_ten_score === 10) {
      this.total += pins;
    }
    this.roll_twenty_one_pins = pins
    return this.total;
  }

  addRollTwentyTwo(pins) {
    if (this.roll_twenty_one_pins === 10) {
      this.total += pins;
    }
    return this.total;
  }
}
