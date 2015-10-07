function Game() {
  this.score = 0;
  this.frameOver = false;
  this.rolls = {1:[], 2:[], 3:[], 4:[], 5:[],
                6:[], 7:[], 8:[], 9:[],10:[]};
  this.currentFrame = 1;
  this.bonusManager = null;
  this.bonusCounter = 0
};

Game.prototype.roll = function(pins) {
  this.bonusChecker(pins);
  this.rolls[this.currentFrame].push(pins);
  this.bonusDistributor(pins);
  this.frameChecker(pins);
};

Game.prototype.frameChecker = function(pins) {
  if (pins === 10 || this.frameOver === true) {
    this.currentFrame++; this.frameOver = !this.frameOver
  } else {
  this.frameOver = !this.frameOver;
  }
};

Game.prototype.bonusChecker = function(pins) {
  if (pins === 10) {
    this.nextTwoBonus;
    this.score +=10
  };
  var total = 0;
    $.each(this.rolls[this.currentFrame],function() {
    total += this
  });
  if (total === 10) {
    this.nextOneBonus;
  }
  this.score += pins
};

Game.prototype.nextTwoBonus = function() {
  this.bonusCounter = 2;
  this.bonusManager = this.rolls[this.currentFrame]
};

Game.prototype.nextOneBonus = function() {
  this.bonusCounter = 1;
  this.bonusManager = this.rolls[this.currentFrame]
};

Game.prototype.bonusDistributor = function(pins) {
  if (this.bonusCounter != 0) {
    this.bonusManager += pins;
    this.bonusCounter--;
  };
};