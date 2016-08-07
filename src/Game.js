
function Game() {
  this.rolls = [];
}

Game.prototype.roll = function(pins) {
  this.rolls.push(pins);
};

Game.prototype.score = function() {
   var total = 0;
   var rollIndex = 0;
   var these = this;

  for(var framesCount = 0;framesCount < 10; framesCount++) {
    if (isSpare()) {
      total += getSpareScore();
    } else {
      total += getStandardScore();
    }
    rollIndex += 2;
  }

  return total;

function isSpare() {
 return these.rolls[rollIndex] + these.rolls[rollIndex + 1] === 10;
}
function getSpareScore() {
 return these.rolls[rollIndex] + these.rolls[rollIndex + 1] + these.rolls[rollIndex + 2];
}
function getStandardScore() {
 return these.rolls[rollIndex] + these.rolls[rollIndex + 1];
}

};
