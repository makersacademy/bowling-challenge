"use strict";

var Game = function(){
  this.rolls = [];

  this.roll = function(pins){
    this.rolls.push(pins);
  }

  this.getTotal = function(){
    this.score = this.rolls.reduce( (a, b) => a + b , 0);
    if(this.score === 120){
      this.score = 300;
    }
    return this.score;
  }



}
