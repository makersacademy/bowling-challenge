function Bowling() {
  this.currentRoll = 0
  this.score = 0
  this.bonus = 1
  this.bonusArr = []
};

Bowling.prototype.roll = function(pins) {
  if (/[^0-9x/]/.test(pins)) { return };
  if (pins === 'x') {
    this.currentRoll += 2;
    this.score += (10 * this.bonus);
    if (this.bonus < 3) {this.bonus++};
    if (this.bonus === 2) {this.bonusArr = ['x']};
  } else if (pins === '/') {
    this.currentRoll += 1;
  } else if (pins <= 9) {
    this.currentRoll += 1;
    this.score += (pins * this.bonus);
    if ((this.bonus === 2) && (this.bonusArr.length === 1)) {
      this.bonusArr.pop(); } else if (this.bonus > 1) {
      this.bonusArr.pop();
      this.bonus--;
    };
  } else {return};
};
