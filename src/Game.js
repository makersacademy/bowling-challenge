
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
      rollIndex += 2;
    } else if(isStrike()){
      total += getStrikeScore();
      rollIndex ++;
    } else {
      total += getStandardScore();
      rollIndex += 2;
    }

  }

  return total;

function isSpare() {
 return these.rolls[rollIndex] + these.rolls[rollIndex + 1] === 10;
}
function isStrike() {
 return these.rolls[rollIndex] === 10;
}
function getSpareScore() {
 return these.rolls[rollIndex] + these.rolls[rollIndex + 1] + these.rolls[rollIndex + 2];

}
function getStrikeScore() {
  return getSpareScore();
}
function getStandardScore() {
 return these.rolls[rollIndex] + these.rolls[rollIndex + 1];
}

};
