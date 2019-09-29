var BowlingGame = function(){
  this.currentRoll = 1
  this.rolls = []
  this.currentFrame = 1
  this.score = 0
  this.remainingRolls = 21
  this.pinsPerFrame = []
  this.strikeBonusSwitch = false
  this.spareBonusSwitch = false
};

BowlingGame.prototype.roll = function (pins) {
  var index = this.rolls.length
  this.score += pins;
  // Moved this at the bottom: this.rolls.push(pins);
  this.spareBonus(pins, index);
  this.strikeBonus(pins, index);
  this.strikeBonusPlus(pins, index);


  //Can't get it to register the second bonus.

  if (this.isStrike(pins) && this.currentRoll === 1) {
    this.pinsPerFrame.push(pins);
    this.strikeBonusSwitch = true;
    this.currentFrame += 1
  }else if (this.currentRoll === 1) {
   this.pinsPerFrame.push(pins);
   this.currentRoll = 2
 } else {
   this.isSpare ? this.spareBonusSwitch = true : this.spareBonusSwitch = false
   this.pinsPerFrame[this.currentFrame - 1] += pins;
   this.currentFrame += 1
   this.currentRoll = 1
 }

this.rolls.push(pins);

};

BowlingGame.prototype.isStrike = function(pins) {
  if (pins === 10 && this.currentRoll === 1) {
    return true
  } else {
    return false
  }
};

BowlingGame.prototype.strikeBonus = function(pins, index, num=1) {
  if (this.isStrike(this.rolls[index - num]) && this.strikeBonusSwitch) {
    this.score += pins;
    this.pinsPerFrame[this.currentFrame - 2] += pins;
    this.strikeBonusSwitch = true;
  }
};

BowlingGame.prototype.strikeBonusPlus = function(pins, index) {
  if (this.rolls[index - 2] === 10 && this.strikeBonusSwitch) {
    this.score += pins;
    this.bonusAllocation(pins);
  }
};

BowlingGame.prototype.bonusAllocation = function(pins) {
  if (this.currentRoll === 1) {
    this.pinsPerFrame[this.currentFrame - 3] += pins;
    // this.strikeBonusSwitch = true;
  } else {
    this.pinsPerFrame[this.currentFrame - 2] += pins;
    this.strikeBonusSwitch = false;
  }
};

BowlingGame.prototype.isSpare = function(pins, index) {
  if (pins + this.rolls[index - 1] === 10 && this.currentRoll === 2 && this.spareBonus === false) {
    return true
  } else {
    return false
  }
};

BowlingGame.prototype.spareBonus = function(pins, index) {
  if (this.rolls[index -2] + this.rolls[index - 1] === 10 && this.strikeBonusSwitch === false) {
    this.score += pins;
    this.pinsPerFrame[this.currentFrame - 2] += pins;
    this.spareBonusSwitch = false;
  }
};
