class Frame {
  constructor(id) {
    this.id = id;
    this.roll1 = 0;
    this.roll2 = 0;
    this.roll3 = 0;
    this.bonus = 0;
    this.score = 0;
    this.totalScore = 0;
  };

  calculateScore() {
    if (this.roll2 === '') {
      this.score = this.roll1 + this.roll3 + this.bonus;
    } else {
      this.score = this.roll1 + this.roll2 + this.roll3 + this.bonus; 
    };
  };

  isStrike() {
    return this.roll1 === 10;
  };

  isSpare() {
    return !this.isStrike && (this.roll1 + this.roll2 === 10);
    // Will maybe need this for frame 10?
    // && ! (this.id === 10 && this.roll1 === 10 && this.roll2 === 0);
  };
};

module.exports = Frame;