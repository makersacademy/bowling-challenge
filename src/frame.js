var Frame = function(){
  MAXIMUM_SCORE = 10;
  this.currentScore = 0;
  this.rollNumber = 1;
  this.secondRollImpossibilities = [];
};

Frame.prototype.getCurrentScore = function () {
  return this.currentScore;
};

Frame.prototype.calculateScore = function (roll1, roll2) {
  if (roll1 === MAXIMUM_SCORE) {
    this.currentScore = MAXIMUM_SCORE
  } else {
    this.currentScore = roll1 + roll2;
  }
};

Frame.prototype.checkRolls = function () {
  return this.rollNumber;
};

Frame.prototype.addRoll = function () {
  if(this.rollNumber === 2) {
    this.rollNumber = 1;
  } else {
  ++ this.rollNumber;
  }
};

Frame.prototype.impossibleRolls = function(roll1Score) {
  maxRoll = (MAXIMUM_SCORE + 1) - roll1Score
  this.secondRollImpossibilities = Array(roll1Score).fill(maxRoll).map((x, y) => x + y)
  return this.secondRollImpossibilities
};
