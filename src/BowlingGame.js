'use strict';

function BowlingGame(player){
  this._player = player;
};

BowlingGame.prototype.getPlayer = function(){
  return this._player;
};
