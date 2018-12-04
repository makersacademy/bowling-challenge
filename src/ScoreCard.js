function ScoreCard () {
  this.frameNumber = 1;
  this.rollNumber = 1;
  this.pinsKnockedDown = [ [],[],[],[],[],[],[],[],[],[] ];
  this.bonusTrackers = [];
  this.bonusPins = [0, 0, 0, 0, 0, 0, 0, 0, 0, 0];
};

ScoreCard.prototype.addScore = function(pins) {
  this.addPins(pins);
  this.addBonus(pins);
  this.updateProperties(pins);
};

ScoreCard.prototype.addPins = function(pins) {
  var tenthFrameTotal = 0;
  tenthFrameTotal += this.pinsKnockedDown[9].reduce(function(a,b) {
    return a + b
  }, 0);
  if (tenthFrameTotal < 10) {
    this.pinsKnockedDown[this.frameNumber-1].push(pins);
  };
};

ScoreCard.prototype.addBonus = function(pins) {
  for (var i = 0; i < this.bonusTrackers.length; i++) {
    if (this.bonusTrackers[i].counter > 0) {
      this.bonusPins[this.bonusTrackers[i].frameRolledOn-1] += pins
      this.bonusTrackers[i].counter --;
    };
  };
};

ScoreCard.prototype.updateProperties = function(pins) {
  var tenthFrameTotal = 0;
  tenthFrameTotal += this.pinsKnockedDown[9].reduce(function(a,b) {
    return a + b
  }, 0);
  if (this.rollNumber == 1) {
    if (pins == 10) {
      if (tenthFrameTotal < 10) {
        this.bonusTrackers.push(new BonusTracker(this.frameNumber, 2))
        if (this.frameNumber != 10) {
          this.frameNumber ++;
        };
      };
    } else {
      this.rollNumber ++;
    };
  } else {
    if (this.pinsKnockedDown[this.frameNumber-1][0] + pins == 10 && tenthFrameTotal < 10 ) {
      this.bonusTrackers.push(new BonusTracker(this.frameNumber, 1))
    };
    if (this.frameNumber != 10) {
      this.frameNumber ++;
      this.rollNumber = 1;
    };
  };
};

ScoreCard.prototype.calculateScore = function(toFrame = 10) {  // calculates all frames by default
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
