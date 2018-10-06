function FinalFrame() {
  this.rolls = [];
  this.strike = [false, false];
  this.spare = false;
  this.remaining = 10;
}

FinalFrame.prototype.roll = function roll(score) {
  if (this.over === true) {
    throw new Error('The frame is already over.');
  } else if (score > 10) {
    throw new Error('The score on one roll cannot be over 10.');
  } else if (score > this.remaining) {
    throw new Error('You cannot knock down more pins than there are standing');
  }
  this.scoreRoll(score);
};

FinalFrame.prototype.scoreRoll = function scoreRoll(score) {
  this.rolls.push(score);
  if (this.rolls.length === 3) {
    this.over = true;
  } else if (this.rolls.length === 2) {
    this.secondRoll();
  } else if (this.rolls.length === 1) {
    this.firstRoll();
  }
};

FinalFrame.prototype.firstRoll = function firstRoll() {
  console.log("hello");
};

FinalFrame.prototype.secondRoll = function secondRoll() {
  console.log("hello");
};
