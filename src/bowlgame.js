function Game() {
};
Game.prototype.score = function() {
  total = 0;
  for (i = 0; i < bowl.rolls.length; i++) {
    total += bowl.rolls[i];
  };
  return total;
};

function Bowl() {
  this.rolls = [];
};
Bowl.prototype.roll = function(skittles) {
  this.rolls.push(skittles);
};
