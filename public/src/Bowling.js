function BowlingScorecard() {
  this.ZERO = 0;
  this.total = this.ZERO;
  this.firstRoll = null;
  this.secondRoll = null;
  this.rollNumber = this.ZERO;
  this.frameNumber = this.ZERO;
  this.rolls = [];
  this.strikes = [];
  this.hasSpareBeenRolled = false;
  this.hasStrikeBeenRolled = false;
  this.bonusRole = false;
  this.printTotal = [0,0,0,0,0,0,0,0,0,0];
  this.printTrigger = this.ZERO;
}

BowlingScorecard.prototype.roll = function(pins) {
  this.rollNumber += 1;
  this.rolls.push(pins);
  this.frame(pins);
};

BowlingScorecard.prototype.frame = function(roll) {
  if (this.firstRoll == null) {
    this.frameNumber += 1;
    this.firstRoll = roll;
    this.addSpareBonus(roll);
    this.isStrike(roll);
  } else {
    this.secondRoll = roll;
  }
  this.calculateFrame(roll);
};

BowlingScorecard.prototype.calculateFrame = function(roll) {
  if (this.hasStrikeBeenRolled == true) {
    this.secondRoll = 0;
  }
  if (this.frameNumber == 12 && this.rolls[19] == 10 ) {
    this.printTotal[9] += (roll);
  }
  if ((this.firstRoll + this.secondRoll) > 10 ) {
    this.second = null;
  } else {
    if (this.firstRoll != null && this.secondRoll != null) {
      var frameTotal = (this.firstRoll + this.secondRoll);
      var frameNumber = this.frameNumber;
      if (this.frameNumber < 11) {
        this.total += (frameTotal);
        this.printTotal[frameNumber - 1] += (frameTotal);
      }
      this.isSpare(frameTotal);
      this.firstRoll = null;
      this.secondRoll = null;
    }
    this.calculateStrikeBonus(roll);
    this.hasStrikeBeenRolled = false;
  }
};

BowlingScorecard.prototype.isSpare = function(frameTotal) {
  if (frameTotal == 10 && this.hasStrikeBeenRolled == false) {
    this.hasSpareBeenRolled = true;
  }
};

BowlingScorecard.prototype.addSpareBonus = function(roll) {
  if (this.hasSpareBeenRolled == true) {
    this.total += roll;
    this.printTotal[this.frameNumber - 2] += (roll);
    this.hasSpareBeenRolled = false;
  }
};

BowlingScorecard.prototype.isStrike = function(roll) {
  if (roll == 10) {
    this.strikes.push(this.rollNumber);
    this.hasStrikeBeenRolled = true;
  }
};

BowlingScorecard.prototype.calculateStrikeBonus = function(roll) {
  var currentRollNumber = this.rollNumber;
  var bonuses = 0;
  var strikeBonusOne = 0;
  var strikeBonusTwo = 0;
  var currentFrame = this.frameNumber;
  this.strikes.forEach(function(strikeRoll) {
    if ((strikeRoll + 1) == currentRollNumber) {
      bonuses += roll;
      strikeBonusOne += roll;
    }
    if (currentFrame < 12) {
      if ((strikeRoll + 2) == currentRollNumber) {
        bonuses += roll;
        strikeBonusTwo += roll;
      }
    }
  });
  if (currentFrame == 11 && this.printTrigger == 1) {
    this.printTotal[9] += (roll);
    this.printTrigger += 1;
  } else if (currentFrame == 12 && this.printTrigger == 1) {
    this.printTotal[9] += (roll);
    this.printTrigger += 1;
  } else {
    this.printTotal[this.frameNumber - 2] += (strikeBonusOne);
    this.printTotal[this.frameNumber - 3] += (strikeBonusTwo);
    if (currentFrame == 11) {
      this.printTrigger += 1;
    }
  }
  this.total += bonuses;
};

BowlingScorecard.prototype.printTotal = function() {
  return this.printTotal;
};
