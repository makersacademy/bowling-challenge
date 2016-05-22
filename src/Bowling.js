var Bowling = function() {
  this.rolls = []
}

Bowling.prototype.roll = function(pins){
    this.rolls.push(pins);
};

Bowling.prototype.score = function(){
    var result = 0;
    var rollIndex = 0;
    var currentGame = this;

    for (var frameIndex = 0; frameIndex < 10; frameIndex++) {
      if(isStrike()) { result += getStrikeScore();
                       rollIndex += 1;
      } else if (isSpare()) {
        result += getSpareScore();
        rollIndex += 2;
      } else {
        result += getNormalScore();
        rollIndex += 2;
      }
    }
    return result;

function isSpare() {
  return currentGame.rolls[rollIndex] + currentGame.rolls[rollIndex + 1] === 10
}

function getSpareScore() {
  return currentGame.rolls[rollIndex] + currentGame.rolls[rollIndex + 1] + currentGame.rolls[rollIndex + 2]
}

function getNormalScore() {
  return currentGame.rolls[rollIndex] + currentGame.rolls[rollIndex + 1];
}

function isStrike() {
  return currentGame.rolls[rollIndex] === 10
}

function getStrikeScore() {
  return currentGame.rolls[rollIndex] + currentGame.rolls[rollIndex + 1] + currentGame.rolls[rollIndex + 2]
}
};
