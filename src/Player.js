'use strict';

function Player(){

}

Player.prototype.makeRoll=function(game,roll){
  game.increaseScore(roll);
};
