'use strict';

function BowlingGame(player){
  this._player = player;
  this._scorecard = new Scorecard();
};

BowlingGame.prototype.getPlayer = function(){
  return this._player;
};

BowlingGame.prototype.getScorecard = function(){
  return this._scorecard;
};
