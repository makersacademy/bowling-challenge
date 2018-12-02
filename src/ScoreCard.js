function ScoreCard () {
  this.frameNumber = 1;
  this.rollNumber = 1;
  this.pinsKnockedDown = [ [],[],[],[],[],[],[],[],[],[] ];
  this.bonusTrackers = [];
  this.bonusPins = [0, 0, 0, 0, 0, 0, 0, 0, 0, 0];
};

ScoreCard.prototype.addScore = function(pins) {
  this.pinsKnockedDown[this.frameNumber-1].push(pins);
  this.addBonus(pins);
  this.updateProperties(pins);
};

ScoreCard.prototype.addBonus = function(pins) {
  for (var i = 0; i < this.bonusTrackers.length; i++) {
    this.addBonus2(this.bonusTrackers[i], pins)
  };
};

ScoreCard.prototype.addBonus2 = function(bonusTracker, pins) {
  if (bonusTracker.counter > 0) {
    this.bonusPins[bonusTracker.frameRolledOn-1] += pins
  };
};


ScoreCard.prototype.updateProperties = function(pins) {
  if (this.rollNumber == 1) {
    if (pins == 10) {
      this.bonusTrackers.push(new BonusTracker(this.frameNumber, 2))
      this.frameNumber ++;
    } else {
      this.rollNumber ++;
    };
  } else {
    if (this.pinsKnockedDown[this.frameNumber-1][0] + pins == 10) {
      this.bonusTrackers.push(new BonusTracker(this.frameNumber, 2))
    }
    this.frameNumber ++;
    this.rollNumber = 1;
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
