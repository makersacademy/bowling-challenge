function Game() {
  this.score = 0;
  this.frameOver = false;
  this.rolls = {1:[], 2:[], 3:[], 4:[], 5:[],
                6:[], 7:[], 8:[], 9:[],10:[]};
  this.currentFrame = 1;
  this.lastFrameStrike = false;
  this.lastFrameSpare = false;
  this.isStrike = false
};

Game.prototype.roll = function(pins) {
  this.bonusDistributor(pins)
  this.bonusChecker(pins);
  this.rolls[this.currentFrame].push(pins);
  this.scoreUpdate(pins);
  this.frameHandler(pins)
};

// --------------------------------------------------

Game.prototype.bonusChecker = function(pins) {
  if (pins === 10) {
    this.isStrike = true
    this.lastFrameStrike = true
  };
  var total = 0;
    $.each(this.rolls[this.currentFrame],function() {
    total += this
  });
  if (total === 10) {
    this.lastFrameSpare = true
  };
  this.isStrike = false
};

// --------------------------------------------------

Game.prototype.bonusDistributor = function(pins) {
  // push to last frame if last frame was strike and make lastlast true
  if(this.lastFrameStrike === true) { this.addToLast(pins) ; this.lastLastFrameStrike = true };
  if(this.lastFrameStrike === false && this.lastLastFrameStrike === true) { this.addToLastAgain(pins) ; this.lastLastFrameStrike = false };
  if(this.lastFrameSpare === true) { this.addToLast(pins) ; this.lastFrameSpare = false }
};

// --------------------------------------------------

Game.prototype.addToLast = function(pins) {
  this.rolls[this.currentFrame - 1].push(pins)
};

Game.prototype.addToLastAgain = function(pins) {
  if (this.isStrike === true) {this.rolls[this.currentFrame - 2].push(pins)};
  this.rolls[this.currentFrame - 1].push(pins)
};

// --------------------------------------------------

Game.prototype.scoreUpdate = function(pins) {
  this.score += pins
  var sum = 0;
  for (var k in this.rolls) {
  vals = this.rolls[k];
    for (var i=0; i<vals.length; i++) {
      sum += vals[i] || 0;
    }
  }
};

Game.prototype.frameHandler = function(pins) {
  if (pins === 10 || this.frameOver === true) {
    this.currentFrame++; this.frameOver = !this.frameOver
  } else {
  this.frameOver = !this.frameOver;
  }
};

// --------------------------------------------------