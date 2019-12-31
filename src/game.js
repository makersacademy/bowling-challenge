let Game = function() {
  this.rolls = []
}

Game.prototype.roll = function(pins) {
  this.rolls.push(pins)
}



Game.prototype.score = function() {


  let result = 0;
  let rollIndex= 0;
  let game = this;


  for(let frame = 0; frame < 10; frame++) {

    if (aStrike()) {
      result += getStrikeScore();
      rollIndex++;

    } else if (aSpare()) {
      result += getSpareScore()
      rollIndex += 2;

    } else {
      result  += getNormalScore()
      rollIndex += 2;
    }
}
return result;


function aStrike() {
  return game.rolls[rollIndex] == 10
}

function aSpare() {
  return game.rolls[rollIndex] + game.rolls[rollIndex + 1] == 10
}

function getSpareScore() {
  return game.rolls[rollIndex] + game.rolls[rollIndex + 1] + game.rolls[rollIndex + 2]
}


function getStrikeScore() {
  return game.rolls[rollIndex] + game.rolls[rollIndex + 1] + game.rolls[rollIndex + 2]
}

function getNormalScore() {
  return game.rolls[rollIndex] + game.rolls[rollIndex + 1]
}

}