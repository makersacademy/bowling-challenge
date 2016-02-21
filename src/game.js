'use strict';

function Game(){
  this.score = 0;}

  Game.prototype.bowl = function (){
    var result = Math.floor(Math.random() * 10) + 1; 
    this.score += result;
    return result;
  };
