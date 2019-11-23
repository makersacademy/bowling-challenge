function Game (){
  this.rolls = [ ]
};

Game.prototype.roll = function (pins) {
  this.rolls.push(pins);
};

Game.prototype.score = function () {
  var score = 0
  return score;
};
