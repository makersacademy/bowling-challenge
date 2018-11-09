function Bowling() {
  this.bowls = [];
  this.currentBowl = 0
  this.currentFrame = 1;
};

Bowling.prototype.bowl = function (number) {
  if (this.bowls.length < 18) {
    if (number === 10) {
      this.bowls.push(number, 0)
      this.currentBowl += 2;
    } else {
      this.bowls.push(number)
      this.currentBowl ++;
    }
    if (this.bowls[this.bowls.length - 3] + this.bowls[this.bowls.length - 2] === 10 && this.bowls[this.bowls.length - 2] != 0) {
      this.bowls[this.bowls.length - 2] += number;
    }
    if (this.bowls[this.bowls.length - 3] === 10) {
      this.bowls[this.bowls.length - 3] += number;
    }
    if (this.bowls[this.bowls.length - 4] >= 10 && this.bowls[this.bowls.length - 3] === 0) {
      this.bowls[this.bowls.length - 4] += number;
    }
    if (this.bowls[this.bowls.length - 5] === 20 ) {
      this.bowls[this.bowls.length - 5] += number;
    }
    if (this.bowls[this.bowls.length - 6] === 20 ) {
      this.bowls[this.bowls.length - 6] += number;
    }

  } else {
    this.bowls.push(number)
    if (this.bowls[this.bowls.length - 3] === 10) {
      this.bowls[this.bowls.length - 3] += number;
    }
    this.currentBowl ++;
  }
  if (this.bowls.length % 2 === 0) {
    this.currentFrame ++;
  }
};

Bowling.prototype.getFrameScore = function (number) {
  return this.bowls[(number*2) - 2] + this.bowls[(number*2) - 1]
};

Bowling.prototype.getTotalScore = function () {
  return this.bowls.reduce((accumulator, currentValue) => accumulator + currentValue);
};

Bowling.prototype.getCurrentBowl = function (number) {
  return this.currentBowl;
};

Bowling.prototype.getCurrentFrame = function (number) {
  return this.currentFrame;
};
