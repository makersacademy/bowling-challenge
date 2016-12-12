function Game() {
  this.rolls = [];
  this.framez = [];
  this.result = 0
  // this.strikes = []
};

Game.prototype.cleanRolls = function() {
  this.rolls = [];
};

Game.prototype.recordRoll = function(roll) {
  this.rolls.push(roll);
  // if (this.isStrike()) {
  //   this.strikes.push(this.rolls);
  //   this.cleanRolls();
  // }
  // else
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

Game.prototype.recordFrame = function() {
  if (this.framez.length !== 0 && this.framez[this.framez.length - 1][0] === 10) {
    this.framez[this.framez.length - 1][0] += this.rolls.reduce(function(a, b=0) {
          return a + b;
      }, 0);
  }
  this.framez.push(this.rolls);
  this.cleanRolls();
  if (this.isGameCompleted()) {
    this.calculateResult();
  }
};
Game.prototype.isGameCompleted = function () {
  return this.framez.length === 10
};

Game.prototype.calculateResult = function() {

  var allRolls = this.framez.reduce(function(a, b) {
    return a.concat(b);
  }, []);
  this.result = allRolls.reduce(function(a, b=0) {
        return a + b;
    }, 0);
};
