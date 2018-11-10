function Roll(){
this.rolls = [];
this.totalFrame = 10;
};
 Roll.prototype.firstRoll = function(first) {
  this.rolls.push(first);
};
 Roll.prototype.secondRoll = function(second) {
  this.rolls.push(second);
};
 Roll.prototype.finalScore = function() {
  var finalS = this.rolls.reduce(function(first, second) {
    return first + second;
  }, 0);
  return finalS;
};

Roll.prototype.isStrike = function() {
  if (this.rolls[0] === 10) return true ;
};
 Roll.prototype.isSpare = function() {
  if (this.rolls[0] + this.rolls[1] === 10) return true;
};

Roll.prototype.getCurrentFrame = function() {
  return this.totalFrame;
};
