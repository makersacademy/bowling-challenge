function Game() {
  this.score = 0;
  this.frameOver = false;
  this.rolls = {1:[], 2:[], 3:[], 4:[], 5:[],
                6:[], 7:[], 8:[], 9:[],10:[],
                11:[], 12:[]};
  this.currentFrame = 1;
  // this.lastFrameStrike = false;
  // this.lastFrameSpare = false;
  // this.isStrike = false
};

Game.prototype.roll = function(pins) {
  this.strikeOrSpare(pins);
  this.bonusDistributor(pins);
  this.rolls[this.currentFrame].push(pins);
  this.frameHandler(pins);
  this.nextFrameBonus(pins)
  this.scoreUpdater();
};

// --------------------------------------------------

Game.prototype.strikeOrSpare = function(pins) {
  if (pins === 10) {
    this.isStrike = true;
    this.frameOver = true
  }
  else if (this.rolls[this.currentFrame][0] + pins === 10) {
    this.isSpare = true;
    this.frameOver = true
  };
};

// --------------------------------------------------

Game.prototype.bonusDistributor = function(pins) {
  if (this.isSpare && this.wasStrike2) {this.addToLast(pins)};
  if (this.wasSpare) { this.addToLastSpare(pins) };
  if (this.wasStrike) { this.addToLast(pins) };
  if (this.wasStrike2 && this.currentFrame > 2) { this.addToLastAgain(pins) };
};

// --------------------------------------------------

Game.prototype.addToLast = function(pins) {
  this.rolls[this.currentFrame - 1][0] += pins
};

Game.prototype.addToLastAgain = function(pins) {
  this.rolls[this.currentFrame - 2][0] += pins
};

Game.prototype.addToLastSpare = function(pins) {
  this.rolls[this.currentFrame - 1][1] += pins;
  this.wasSpare = false;
  this.wasStrike2 = false
};

// --------------------------------------------------

Game.prototype.scoreUpdater = function() {
  var sum = 0;
  for (var k in this.rolls) {
  vals = this.rolls[k];
    for (var i=0; i<vals.length; i++) {
      sum += vals[i] || 0
    };
  };
  this.score = (sum - this.rolls[11] - this.rolls[12])
};

Game.prototype.frameHandler = function(pins) {
  if (this.frameOver) {
    this.currentFrame++; this.frameOver = !this.frameOver
  } else {
  this.frameOver = !this.frameOver;
  };
};

Game.prototype.nextFrameBonus = function(pins) {
  if (this.isSpare) {
    this.wasSpare = true;
    this.isSpare = false
    if (this.wasStrike) {
      this.wasStrike = false;
      this.wasStrike2 = true
    }
  } else if (this.isStrike && this.wasStrike) {
    this.wasStrike2 = true
  } else if (this.isStrike) {
    this.isStrike = false;
    this.wasStrike = true
  } else if (this.wasStrike) {
    this.wasStrike = false;
    this.wasStrike2 = true
  } else if (this.wasStrike2) {
    this.wasStrike2 = false
  };
};

// --------------------------------------------------
