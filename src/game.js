function Game() {
  this.points = [];
  this.pointsIndex = 0;
  this.STRIKE = 10;
  this.SPARE = 10;
}

Game.prototype.roll = function(rollPoints) {
  this.points.push(rollPoints);
};

Game.prototype.score = function() {
  let finalScore = 0;

  for (let frame = 0; frame < 10; frame += 1) {
    if (this.isStrike()) {
      finalScore += this.strikeScore();
      this.pointsIndex += 1;
    } else if (this.isSpare()) {
      finalScore += this.spareScore();
      this.pointsIndex += 2;
    } else {
      finalScore += this.otherScore();
      this.pointsIndex += 2;
    }
  }
  return finalScore;
};

Game.prototype.isSpare = function() {
  return this.points[this.pointsIndex]
  + this.points[this.pointsIndex + 1] === this.SPARE;
};

Game.prototype.spareScore = function() {
  return this.points[this.pointsIndex] + this.points[this.pointsIndex + 1]
  + this.points[this.pointsIndex + 2];
};

Game.prototype.isStrike = function() {
  return this.points[this.pointsIndex] === 10;
};

Game.prototype.strikeScore = function() {
  return this.points[this.pointsIndex] + this.points[this.pointsIndex + 1]
  + this.points[this.pointsIndex + 2];
};

Game.prototype.otherScore = function() {
  return this.points[this.pointsIndex] + this.points[this.pointsIndex + 1];
};
