function ScoreCard () {
  this.frameNumber = 1;
  this.rollNumber = 1;
  this.pinsKnockedDown = [ [],[],[],[],[],[],[],[],[],[] ];
  this.bonusRolls = 0;
  this.bonusPins = [0, 0, 0, 0, 0, 0, 0, 0, 0, 0];
};

ScoreCard.prototype.addScore = function(pins) {
  this.pinsKnockedDown[this.frameNumber-1].push(pins);
  this.addBonus(pins);
  if (this.rollNumber == 1) {
    if (pins == 10) {
      this.frameNumber ++;
      this.bonusRolls = 2;
    } else {
      this.rollNumber ++;
    };
  } else {
    this.frameNumber ++;
    this.rollNumber = 1;
  };
};

ScoreCard.prototype.addBonus = function(pins) {
  if (this.bonusRolls > 0) {
    this.bonusPins[this.frameNumber-2] += pins
    this.bonusRolls --;
  };
};

ScoreCard.prototype.calculateScore = function (toFrame = 10) {  // calculates all frames by default
  var score = 0;
  for (var i = 0; i < toFrame; i++) {
    score += this.pinsKnockedDown[i].reduce(function(a,b) {
      return a + b
    }, 0);
  };
  for (var i = 0; i < toFrame; i++) {
    score += this.bonusPins[i]
  };
  return score;
};
