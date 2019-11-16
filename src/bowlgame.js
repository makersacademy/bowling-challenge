function Game() {
};
Game.prototype.score = function() {
  var total = 0;
  var i = 0;
  for (var frame = 0; frame < 10; frame++) {
    if (bowl.rolls[i] + bowl.rolls[i+1] === 10) {
      total += 10 + bowl.rolls[i+2];
      i+=2;
    } else {
      total += bowl.rolls[i] + bowl.rolls[i+1];
      i+=2;
    };
  };
  return total;
};


function Bowl() {
  this.rolls = [];
};
Bowl.prototype.roll = function(skittles) {
  this.rolls.push(skittles);
};
