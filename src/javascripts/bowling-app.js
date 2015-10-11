function Game() {
  this.score = 0;
  this.frameOver = false;
  this.rolls = {1:[], 2:[], 3:[], 4:[], 5:[],
                6:[], 7:[], 8:[], 9:[],10:[]};
  this.currentFrame = 1;
  // this.lastFrameStrike = false;
  // this.lastFrameSpare = false;
  // this.isStrike = false
};

Game.prototype.roll = function(pins) {
  this.strikeOrSpare(pins);
  this.bonusDistributor(pins);
  this.rolls[this.currentFrame].push(pins);
  this.scoreUpdater(pins);
  this.frameHandler(pins);
  this.nextFrameBonus(pins)
};

// --------------------------------------------------

Game.prototype.strikeOrSpare = function(pins) {
  if (pins === 10) {
    this.isStrike = true;
  };
  if (pins != 10) {
    var total = 0;
      $.each(this.rolls[this.currentFrame],function() {
      total += this
    });
    if (total === 10) {
      this.isSpare = true
    };
  };
};

// --------------------------------------------------

Game.prototype.bonusDistributor = function(pins) {
  if(this.wasStrike) { this.addToLast(pins) };
  if(this.wasStrike2 && this.currentFrame > 1) { this.addToLastAgain(pins) };

};

// --------------------------------------------------

Game.prototype.addToLast = function(pins) {
  this.rolls[this.currentFrame - 1][0] += pins
};

Game.prototype.addToLastAgain = function(pins) {
  this.rolls[this.currentFrame - 2][0] += pins
};

// --------------------------------------------------

Game.prototype.scoreUpdater = function(pins) {
  this.score += pins
  var sum = 0;
  for (var k in this.rolls) {
  vals = this.rolls[k];
    for (var i=0; i<vals.length; i++) {
      sum += vals[i] || 0
    };
  };
  this.score = sum
};

Game.prototype.frameHandler = function(pins) {
  if (this.isStrike || this.frameOver) {
    this.currentFrame++; this.frameOver = !this.frameOver
  } else {
  this.frameOver = !this.frameOver;
  };
};

// Why was this breaking???
Game.prototype.nextFrameBonus = function(pins) {
  if (this.isStrike && this.wasStrike) {
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
