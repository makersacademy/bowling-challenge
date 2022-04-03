const Frame = require('./frame');

class Scorecard {
  constructor(turn = 1) {
    this.turn = turn;
    this.frames = [new Frame()];
  }
  roll(number_of_pins) {
    if (this.turn == 10 && this.frames[this.frames.length - 1].complete)
      throw 'Your game is complete';
    if (this.frames[this.frames.length - 1].complete && this.turn < 10) {
      this.turn += 1;
      this.frames.push(new Frame(this.turn));
    }
    this.frames[this.frames.length - 1].roll(number_of_pins);
  }
  score() {
    this.points = 0;
    for (const [index, frame] of this.frames.entries()) {
      if (this.frames[this.frames.length - 1] === frame) {
        this.add_frame_score(frame.score);
      } else if (frame.strike()) {
        if (
          this.frames[index + 1].strike() &&
          this.frames[this.frames.length - 1] != this.frames[index + 1]
        ) {
          frame.score +=
            this.frames[index + 1].calculate_total() +
            this.frames[index + 2].roll1;
        } else if (
          this.frames[index + 1].strike() &&
          this.frames[this.frames.length - 1] == this.frames[index + 1]
        ) {
          frame.score +=
            this.frames[index + 1].roll1 + this.frames[index + 1].roll2;
        } else {
          frame.score += this.frames[index + 1].calculate_total();
        }
        this.add_frame_score(frame.score);
      } else if (frame.spare()) {
        frame.score += this.frames[index + 1].roll1;
        this.add_frame_score(frame.score);
      } else {
        this.points += frame.calculate_total();
      }
    }
    for (const [index, frame] of this.frames.entries()) {
      frame.score = frame.calculate_total();
    }
    return this.points;
  }
  add_frame_score(frame_score) {
    this.points += frame_score;
  }
}

module.exports = Scorecard;
