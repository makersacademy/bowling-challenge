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
  game._rolls = rollsList;
};

Game.prototype.score = function () {
  var sum = 0;
  var frameNr = 1;
  var rollsIndex = 0;
  game._frames = [];
  for (frameNr = 1; frameNr <= 10; frameNr ++) {
    var frame = new Frame(frameNr,[],0);

    if(game.isStrike(rollsIndex)) {
      if (frameNr === 10) {
        var a = [game._rolls[rollsIndex], game._rolls[rollsIndex+1], game._rolls[rollsIndex+2]];
        Array.prototype.push.apply(frame._rolls, a);
        frame._intScore = 10 + game.bonus(rollsIndex);
      }
      else {
        frame._rolls.push(game._rolls[rollsIndex]);
        frame._intScore = 10 + game.bonus(rollsIndex);
        rollsIndex = rollsIndex + 1;
      }
    }

    else if(game.isSpare(rollsIndex)) {

      if(frameNr === 10) {
        var b = [game._rolls[rollsIndex], game._rolls[rollsIndex+1], game._rolls[rollsIndex+2]];
        Array.prototype.push.apply(frame._rolls,b);
        frame._intScore = 10 + game._rolls[rollsIndex+2];
      }
      else {
        var c = [game._rolls[rollsIndex],game._rolls[(rollsIndex+1)]];
        Array.prototype.push.apply(frame._rolls,c);
        frame._intScore = 10 + game.bonus(rollsIndex);
        rollsIndex = rollsIndex +2;
      }
    }

    else {
      var d = [game._rolls[rollsIndex],game._rolls[(rollsIndex+1)]];
      Array.prototype.push.apply(frame._rolls,d);
      frame._intScore = game._rolls[rollsIndex]+game._rolls[rollsIndex+1];
      rollsIndex = rollsIndex +2;
    }

    sum += frame._intScore || 0;

    game._frames.push(frame);
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

Game.prototype.isGutterGame = function() {
  if ( ((game._frames).length === 10) && (game.score() === 0)) {
    return true;
  }
  else {
    return false;
  }
};

Game.prototype.isPerfectGame = function() {
  if ( ((game._frames).length === 10) && (game.score() === 300)) {
    return true;
  }
  else {
    return false;
  }
};
