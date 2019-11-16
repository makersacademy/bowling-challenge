function Game() {
  this.rollScore = [];
};

Game.prototype.roll = function(pins) {
  this.rollScore.push(pins);
};
Game.prototype.frameScore = function() {
  var total = 0;
  for (var i = 0; i < 2; i++) {
    total += this.rollScore[i];
  };
  return total;
};
