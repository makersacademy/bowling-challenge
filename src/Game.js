function Game() {
  this.rolls = [];
  this.framez = [];
  this.result = 0

};
Game.prototype.recordRoll = function(roll) {
  this.rolls.push(roll);
  if (this.isFrameCompleted()) {
    this.recordFrame();
  }
};
Game.prototype.isFrameCompleted = function() {
  return this.rolls.length === 2;
};

Game.prototype.recordFrame = function() {
  this.framez.push(this.rolls);
  this.rolls = [];
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
  this.result = allRolls.reduce(function(a, b) {
        return a + b;
    }, 0);
};
