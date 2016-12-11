function Game() {
  this.rolls = [];
  this.framez = [];
  this.result = 0

};
Game.prototype.recordRoll = function(roll) {
  this.rolls.push(roll);
  if (this.rolls.length === 2) {
    this.recordFrame();
  }
};

Game.prototype.recordFrame = function() {
  this.framez.push(this.rolls);
  this.rolls = [];
  if (this.framez.length === 10) {
    this.calculateResult();
  }
};

Game.prototype.calculateResult = function() {

  var allRolls = this.framez.reduce(function(a, b) {
    return a.concat(b);
  }, []);
  this.result = allRolls.reduce(function(a, b) {
        return a + b;
    }, 0);
};
