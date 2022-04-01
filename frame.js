class Frame {
  constructor(score) {
    this.max_pins = 10
    this.score = [];
  }

  getScore() {
    return this.score;
  };

  rollPins(pins) {
    if (this.frameOver()) throw new Error('cannot roll more than twice'); 
    if (pins < 0) throw new Error('cannot roll negative amount of pins');
    if (pins > this.max_pins) throw new Error('cannot roll more than a maximum amount of pins');
    if (pins > this.max_pins - this.score[0]) throw new Error('the roll input exceeds the amount of pins left');
    this.score.push(pins);
  };

  frameOver() {
    return this.score.length >= 2 || (this.score.length === 1 && this.score[0] === 10);
  };
};

module.exports = Frame
