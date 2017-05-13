function Bowling() {
  this.game = [];
  this.frameCount = 10;
  this.score = 0
  this.strikeTracker = 0
  this.spareTracker = 0

};

Bowling.prototype.frame = function ( rollOne, rollTwo ) {
  if (rollOne == 10) {
    this.frameDecrementer()
    this.strikeBonus()
    this.scoreCalculator(10)
  } else if (rollOne + rollTwo == 10) {
    this.frameDecrementer()
    this.spareBonus()
    this.scoreCalculator(10)
  } else {
    this.frameDecrementer()
    this.scoreCalculator(rollOne + rollTwo)
  }
};
Bowling.prototype.currentScore = function (arr) {
  this.score = arr.reduce(function(a, b) {
  return a + b;
}, 0);
};

Bowling.prototype.frameDecrementer = function () {
  this.frameCount --
};

Bowling.prototype.scoreLogger = function (score) {
  this.game.push(score)
};

Bowling.prototype.scoreCalculator = function (points) {
  if (this.strikeTracker > 0 && this.strikeTracker < 3) {
    this.scoreLogger(points * 2)
    this.BonusCounter()
  } else if (this.spareTracker > 0 && this.spareTracker < 2) {
    this.scoreLogger(points * 2)
    this.BonusCounter()
  } else {
    this.scoreLogger(points)
    this.BonusCounter()
  };
};

Bowling.prototype.strikeBonus = function () {
  this.strikeTracker = 3
};

Bowling.prototype.spareBonus = function () {
  this.spareTracker = 2
};

Bowling.prototype.BonusCounter = function () {
  if (this.strikeTracker > 0) {
    this.strikeTracker -= 1
  }
  if (this.spareTracker > 0){
    this.spareTracker -= 1
  };
};
