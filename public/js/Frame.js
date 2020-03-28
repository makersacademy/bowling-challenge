function Frame() {
  this.roll_1 = 0;
  this.roll_2 = 0;
  this.bonusPoints = 0;
  this.strike = false;
  this.spare = false;
  this.next_frame = {};
}

Frame.prototype.roll = function(roll, pins) {
  if (roll == 1) {
    this.roll_1 = pins;
    this.isStrike();
  };
  if (roll == 2) {
    this.roll_2 = pins;
    this.isSpare();
  };
};

Frame.prototype.isStrike = function() {
  if (this.roll_1 == 10) {
    this.strike = true;
  }
}

Frame.prototype.isSpare = function() {
  if (this.roll_1 + this.roll_2 == 10 && !this.strike) {
    this.spare = true;
  }
}

Frame.prototype.score = function() {
  this.bonus(this.next_frame);
  return this.roll_1 + this.roll_2 + this.bonusPoints;
}

Frame.prototype.bonus = function(frame) {
  this.bonusPoints = 0;
  if (!this.strike && !this.spare) { return 0 };
  if (this.strike || this.spare) { this.bonusPoints += frame.roll_1 };
  if (this.strike) { this.bonusPoints += frame.roll_2 };
  if (this.strike && frame.strike) { this.bonusPoints += frame.next_frame.roll_1 };
}
