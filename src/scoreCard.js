var ScoreCard = function() {
  this.rollsSheet = [];
};

ScoreCard.prototype.totalScore = function() {
  return this.rollsSheet
    .map(frame => frame.reduce((acc, roll) => acc + roll))
    .reduce((acc, frameScore) => acc + frameScore);
};

ScoreCard.prototype.addFrameRolls = function(rolls) {
  if (rolls && this.rollsSheet.length < 10) {
    this.rollsSheet.push(rolls);
  } else {
    throw new Error("Illegal move");
  }
};

ScoreCard.prototype.seeRolls = function() {
  return this.rollsSheet;
};
