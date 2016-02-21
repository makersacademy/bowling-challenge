'use strict';

function Game(){
  this.score = 0;}

  Game.prototype.bowl = function (){
    var result = this._randNum();
    this.score += result;
    return result;
  };

  Game.prototype._randNum = function (){
    return Math.floor(Math.random() * 10) + 1; 
  };
