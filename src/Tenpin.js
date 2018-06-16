function Tenpin() {
  this.scoreCard = [];
  this.spare = false;
  this.strike = false
};

Tenpin.prototype.frame = function(roll1, roll2) {
  if (this.strike === false && this.spare === false) {
    this.normalScore(roll1, roll2);
  };
};

Tenpin.prototype.normalScore = function(roll1, roll2) {
  if (roll1 === 10) {
    this.strike = true;
  } else if (roll1 + roll2 === 10) {
    this.spare = true;
  } else {
    this.scoreCard.push(roll1 + roll2);
  }
};
