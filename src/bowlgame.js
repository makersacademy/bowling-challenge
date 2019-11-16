function Game() {
};
Game.prototype.score = function() {
  var total = 0;
  var i = 0;
  for (var frame = 0; frame < 10; frame++) {
    if (spare()) {
      spareScore();
      i+=2;
    } else if (strike()) {
      strikeScore();
      i+=1;
    } else {
      normalScore();
      i+=2;
    };
  };
  return total;

  function spare() {
    return bowl.rolls[i] + bowl.rolls[i+1] === 10;
  };

  function spareScore() {
    return total += 10 + bowl.rolls[i+2];
  };

  function strike() {
    return bowl.rolls[i] === 10;
  };

  function strikeScore() {
    return total += bowl.rolls[i] + bowl.rolls[i+1] + bowl.rolls[i+2];
  };

  function normalScore() {
    return total += bowl.rolls[i] + bowl.rolls[i+1];
  };
};

function Bowl() {
  this.rolls = [];
};
Bowl.prototype.roll = function(skittles) {
  this.rolls.push(skittles);
};
