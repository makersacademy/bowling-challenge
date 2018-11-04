function Roll(){
this.rolls = [];
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
