function Score(array = []) {
  this.array = array;
  this.gameScore = 0;
}

Score.prototype.calculateFrameScore = function() {
  for (var i = 0; i < this.array.length; i++) {
    this.array[i].baseScore = (this.array[i].roll1 || 0) + (this.array[i].roll2 || 0) + (this.array[i].roll3 || 0);
  }
};

Score.prototype.calculateBonus = function () {
  for (i = 0; i < this.array.length; i++) {
    if (this.array[i].isSpare) {
      this.array[i].bonusScore = this.array[i + 1].roll1;
    } else if (this.array[i].isStrike) {
      if (this.array[i + 1] === undefined) {
        break
      } else if (this.array[i + 1].roll2 !== undefined) {
        this.array[i].bonusScore = (this.array[i + 1].roll1 + this.array[i + 1].roll2);
      } else {
        this.array[i].bonusScore = (this.array[i + 1].roll1 + this.array[i + 2].roll1);
      }
    } else {
      this.array[i].bonusScore = 0;
    }
  }
};

Score.prototype.frameTotalScore = function () {
  for (var i = 0; i < this.array.length; i++) {
    this.array[i].frameScore = (this.array[i].baseScore || 0) + (this.array[i].bonusScore || 0);
  }
};

Score.prototype.gameTotalScore = function () {
  var total = 0;
  for (var i = 0; i < this.array.length; i++) {
    total = total + (this.array[i].frameScore || 0)
  }
  this.gameScore = total;
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
