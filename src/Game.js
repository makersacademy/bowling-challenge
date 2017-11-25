'use strict'

function Game(){
  this._frames = [];
  this._rolls = [];
};

Game.prototype.updateRolls = function (rollsList) {
  if(rollsList.length > 21){
    throw new Error('cannot have more than 21 rolls in a game')
  }
  this._rolls = rollsList;

};
