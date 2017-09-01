function Game () {
  this.points = [];
  this.rollIndex = 0;
}

Game.prototype.roll = function(pin) {
  this.points.push(pin);
};

Game.prototype.isStrike = function () {
  return this.points[this.rollIndex] === 10;
};

Game.prototype.isSpare = function () {
  return this.points[this.rollIndex] + this.points[this.rollIndex + 1] === 10;
};

Game.prototype.strikeScore = function () {
  return this.points[this.rollIndex] + this.points[this.rollIndex + 1] +
            this.points[this.rollIndex + 2];
};

Game.prototype.spareScore = function () {
  return this.points[this.rollIndex] + this.points[this.rollIndex + 1] +
            this.points[this.rollIndex + 2];
};

Game.prototype.normalScore = function () {
  return this.points[this.rollIndex] + this.points[this.rollIndex + 1];
};


Game.prototype.score = function () {
  var result = 0;
  for (var line = 0; line < 10; line ++) {
    if (this.isStrike()) {
      result += this.strikeScore();
      this.rollIndex += 1;
    } else if (this.isSpare()) {
      result += this.spareScore();
      this.rollIndex += 2;
    } else {
        result += this.normalScore();
        this.rollIndex += 2;
    }
  }
  return result;
};
