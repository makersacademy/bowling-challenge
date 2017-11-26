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
  var allRolls = [];
  for (frameNr = 1; frameNr <= 10; frameNr ++) {
    var frame;
    frame = new Frame(frameNr,[],0)
    allRolls = game._rolls;
    if(game.isStrike(allRolls[rollsIndex])) {
      frame._rolls.push(allRolls[rollsIndex]);
      frame._intScore =frame._intScore + allRolls[rollsIndex];
      rollsIndex = rollsIndex +1;
    }
    sum = sum + frame._intScore;
    console.log(frame);
   };
return sum;

};

Game.prototype.isStrike = function (roll) {
  return roll === 10;

};
