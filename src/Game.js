'use strict'

function Game(){
  this._frames = [];
  this._rolls = [];
};

var game;
game = new Game();

Game.prototype.updateRolls = function (rollsList) {
  if(rollsList.length > 21){
    throw new Error('cannot have more than 21 rolls in a game')
  }
  this._rolls = rollsList;
};

Game.prototype.score = function () {
  var sum = 0;
  var frameNr = 1;
  var rollsIndex = 0;
  for (frameNr = 1; frameNr <= 10; frameNr ++) {
    var frame;
    frame = new Frame(frameNr,[],0)
    if(game.isStrike(rollsIndex)) {
      frame._rolls.push(game._rolls[rollsIndex]);
      frame._intScore =frame._intScore + 10 + game.bonus(rollsIndex);
      rollsIndex = rollsIndex +1;
    }

    else if(game.isSpare(rollsIndex)) {
      frame._rolls.push(game._rolls[rollsIndex]);
      frame._rolls.push(game._rolls[(rollsIndex+1)]);
      frame._intScore = frame._intScore + 10 + game.bonus(rollsIndex);
      rollsIndex = rollsIndex +2;
    }

    else {
      frame._rolls.push(game._rolls[rollsIndex]);
      frame._rolls.push(game._rolls[(rollsIndex+1)]);
      frame._intScore = frame._intScore + game._rolls[rollsIndex]+game._rolls[rollsIndex+1];
      rollsIndex = rollsIndex +2;
    }

    sum = sum + frame._intScore;
    console.log(frame);
   };
return sum;
};

Game.prototype.isStrike = function(rollsIndex) {
  return game._rolls[rollsIndex] === 10;
};

Game.prototype.isSpare = function(rollsIndex) {
  return (game._rolls[rollsIndex] + game._rolls[rollsIndex+1]) === 10;
};

Game.prototype.bonus = function(rollsIndex) {
  if(game.isStrike(rollsIndex)) {
    return game._rolls[(rollsIndex+1)] + game._rolls[(rollsIndex+2)];
  }

  if(game.isSpare(rollsIndex)) {
    return game._rolls[(rollsIndex+2)]
  }
};
