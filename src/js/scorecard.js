function Scorecard() {
  this.points = [];
  this.pointsIndex = 0;
  this.STRIKE = 10;
  this.SPARE = 10;
}

Scorecard.prototype.roll = function(rollPoints) {
  this.points.push(rollPoints);
};

Scorecard.prototype.framescore = function(points) {
  let frametotal = 0;

  if (this.isStrike()) {
    frametotal += this.strikeScore();
  } else if (this.isSpare()) {
    frametotal += this.spareScore();
  } else {
    frametotal += this.otherScore();
  }
  return frametotal;
};

Scorecard.prototype.totalscore = function() {
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

Scorecard.prototype.isSpare = function() {
  return this.points[this.pointsIndex]
  + this.points[this.pointsIndex + 1] === this.SPARE;
};

Scorecard.prototype.spareScore = function() {
  return this.points[this.pointsIndex] + this.points[this.pointsIndex + 1]
  + this.points[this.pointsIndex + 2];
};

Scorecard.prototype.isStrike = function() {
  return this.points[this.pointsIndex] === this.STRIKE;
};

Scorecard.prototype.strikeScore = function() {
  return this.points[this.pointsIndex] + this.points[this.pointsIndex + 1]
  + this.points[this.pointsIndex + 2];
};

Scorecard.prototype.otherScore = function() {
  return this.points[this.pointsIndex] + this.points[this.pointsIndex + 1];
};
