'use strict';

function Game(){
  this.Score = 0;}

  Game.prototype.Bowl = function (){
    var result = this._randNum();
    this.Score += result;
    return result;
  };

  Game.prototype._randNum = function (){
    return Math.floor(Math.random() * 10) + 1; 
  };
