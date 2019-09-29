var BowlingGame = function(){
  this.currentRoll = 1
  this.rolls = []
  this.currentFrame = 1
  this.score = 0
  this.remainingRolls = 21
  this.pinsPerFrame = []
  this.strikeBonusSwitch = false
};

BowlingGame.prototype.roll = function (pins) {
  var index = this.rolls.length
  this.score += pins;
  this.rolls.push(pins);

  this.strikeBonus(pins, index);
  this.strikeBonusPlus(pins, index);

  //Can't get it to register the second bonus.

  if (this.isStrike(pins) && this.currentRoll === 1) {
    this.currentFrame += 1
    this.pinsPerFrame.push(pins);
    this.strikeBonusSwitch = true;
  }else if (this.currentRoll === 1) {
   this.pinsPerFrame.push(pins);
   this.currentRoll = 2
 } else {
   this.pinsPerFrame[this.currentFrame - 1] += pins;
   this.currentFrame += 1
   this.currentRoll = 1
 }

 // have to have an if else statement here to change the currentRoll
};

BowlingGame.prototype.isStrike = function(pins) {
  if (pins === 10 && this.currentRoll === 1) {
    return true
  } else {
    return false
  }
};

BowlingGame.prototype.strikeBonus = function(pins, index, num=1) {
  if (this.isStrike(this.rolls[index - num])) {
    this.score += pins;
    this.pinsPerFrame[this.currentFrame - 2] += pins;
  }
};

BowlingGame.prototype.strikeBonusPlus = function(pins, index) {
  if (this.rolls[index - 2] === 10 && this.strikeBonusSwitch) {
    this.score += pins;
    this.pinsPerFrame[this.currentFrame - 2] += pins;
    this.strikeBonusSwitch = false;
  }
};
