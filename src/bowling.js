function Bowling() {
  this.currentRoll = 1
  this.score = 0
};

Bowling.prototype.roll = function(pins) {
  if (/[^0-9x/]/.test(pins)) { return };
  if (pins === '/') {
    this.currentRoll += 1;
  } else if (pins === 'x') {
    this.currentRoll += 2;
  } else if (pins <= 9) {
    this.score += pins;
    this.currentRoll += 1;
  } else {return};
};
