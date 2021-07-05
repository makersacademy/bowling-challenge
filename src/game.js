'use strict';

function Game(){
  this._players = []
}

Game.prototype.players = function(){
  return this._players
}

Game.prototype.addPlayer = function(player){
  this._players.push(player)
}

