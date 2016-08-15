'use strict';

function Player(){

}

Player.prototype.play = function (game) {
  this.currentGame = game;
  this.isPlaying = true;
};

Player.prototype.makeRoll = function (game) {
  this.currentGame.getCurrentScore ();
};
