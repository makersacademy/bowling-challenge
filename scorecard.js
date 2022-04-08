const Frame = require('./frame');

class Scorecard {
  constructor(turn = 1) {
    this.turn = turn;
    this.frames = [new Frame()];
  }
  roll(number_of_pins) {
    if (this.turn == 10 && this.last_frame().complete)
      throw 'Your game is complete';
    if (this.last_frame().complete && this.turn < 10) {
      this.turn += 1;
      this.frames.push(new Frame(this.turn));
    }
    this.last_frame().roll(number_of_pins);
  }
  score() {
    this.points = 0;
    this.frames.forEach((frame) => {
      const next_frame = this.find_frame(frame.turn + 1);
      if (this.last_frame() === frame) {
      } else if (frame.strike()) {
        frame.score += next_frame.score;
        if (next_frame.strike()) {
          this.last_frame() != next_frame
            ? (frame.score += this.find_frame(frame.turn + 2).roll1)
            : (frame.score -= next_frame.roll3);
        }
      } else if (frame.spare()) {
        frame.score += next_frame.roll1;
      }
      this.add_frame_score(frame.score);
      frame.score = frame.calculate_total();
    });
    return this.points;
  }
  add_frame_score(frame_score) {
    this.points += frame_score;
  }
  find_frame(turn) {
    return this.frames.find((frame) => {
      return frame.turn === turn;
    });
  }
  last_frame() {
    return this.frames[this.frames.length - 1];
  }
}

module.exports = Scorecard;
