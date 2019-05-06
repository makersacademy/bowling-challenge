'use strict'

function Scorecard(){
  this.game = new Game
};

Scorecard.prototype.isOver = function (){
  return this.game.framesPlayed() === 10;
};

Scorecard.prototype.ball1 = function (pins){
  this.game.ball1(pins)
};

Scorecard.prototype.ball2 = function (pins){
  this.game.ball2(pins)
};

Scorecard.prototype.total = function () {
  return this.game.score()
};
