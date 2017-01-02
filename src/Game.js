function Game() {
  this.rolls = [];
  this.framez = [];
  this.result = 0
};

Game.prototype.cleanRolls = function() {
  this.rolls = [];
};

Game.prototype.recordRoll = function(roll) {
  this.rolls.push(roll);
  if (this.isFrameCompleted()) {
    this.recordFrame();
  }
};
Game.prototype.isFrameCompleted = function() {
  return (this.rolls.length === 2 || this.isStrike());
};
Game.prototype.isStrike = function() {
  return this.rolls[0] === 10
};

Game.prototype.isLastFrameStrike = function() {
  return this.framez.length !== 0 && this.framez[this.framez.length - 1][0] === 10
};

Game.prototype.isDoubleStrike = function() {
  return this.framez.length >= 2 && this.framez[this.framez.length - 2][0] === 20
};

Game.prototype.calculateStrike = function() {
  if (this.isDoubleStrike()) {
    this.framez[this.framez.length - 2][0] += this.rolls[0]
  }
  if (this.isLastFrameStrike()) {
    this.framez[this.framez.length - 1][0] += this.rolls.reduce(function(a, b=0) {
          return a + b;
      }, 0);
  }
};

Game.prototype.isLastFrameSpare = function() {
  return this.framez.length !== 0 && this.framez[this.framez.length - 1].length === 2 && this.framez[this.framez.length - 1][0] + this.framez[this.framez.length - 1][1] === 10
};

Game.prototype.calculateSpare = function() {
  if (this.isLastFrameSpare()) {
    this.framez[this.framez.length - 1][1] += this.rolls[0]
  }
};

Game.prototype.recordFrame = function() {
  this.calculateStrike();
  this.calculateSpare();
  this.framez.push(this.rolls);
  this.cleanRolls();
  if (this.isGameCompleted()) {
    this.calculateResult();
  }
};

Game.prototype.isRegularEnd = function() {
  return this.framez.length === 10 && this.framez[this.framez.length - 1][0] !== 10
}

Game.prototype.isGameCompleted = function () {
  if (this.isRegularEnd()) {
    return true
  } else {
    return this.framez.length === 12
  }
};

Game.prototype.cutExtraFramez = function() {
  for(var i=0; i < 2; i++){
    if (this.framez.length > 10) {
      this.framez.pop();
    }
  }
};

Game.prototype.cleanFramez = function() {
  this.framez = [];
};

Game.prototype.calculateResult = function() {
  this.result = 0;
  this.cutExtraFramez();
  var allRolls = this.framez.reduce(function(a, b) {
    return a.concat(b);
  }, []);
  this.result = allRolls.reduce(function(a, b=0) {
        return a + b;
    }, 0);
  this.cleanFramez();
};
