function Score(array = []) {
  this.array = array;
}

Score.prototype.calculateFrameScore = function() {
  for (var i = 0; i < this.array.length; i++) {
    this.array[i].score = this.array[i].roll1 + (this.array[i].roll2 || 0) + (this.array[i].roll3 || 0);
  }
};

Score.prototype.calculateBonus = function () {
  for (i = 0; i < this.array.length; i++) {
    if (this.array[i].isSpare) {
      this.array[i].bonus = this.array[i + 1].roll1;
    } else if (this.array[i].isStrike) {
      if (this.array[i + 1].roll2 === undefined) {
        this.array[i].bonus = (this.array[i + 1].roll1 + this.array[i + 2].roll1);
      } else {
        this.array[i].bonus = (this.array[i + 1].roll1 + this.array[i + 1].roll2);
      }
    }
  }
};

Score.prototype.isGutterGame = function () {
  for (var i = 0; i < this.array.length; i++) {
    if (this.array[i].roll1 != 0) return false;
    if (this.array[i].roll2 != 0) return false;
  }
  return true;
};

Score.prototype.isPerfectGame = function () {
  for (var i = 0; i < this.array.length; i++) {
    if (this.array[i].isStrike === false) return false;
  }
  if (this.array[9].roll2 != 10) return false;
  if (this.array[9].roll3 != 10) return false;
  return true;
};
