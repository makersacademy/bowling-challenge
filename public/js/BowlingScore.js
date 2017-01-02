"use strict";

var Game = function(){
  this.rolls = [];
  var strikeCount = 0;

  this.roll = function(pins){
    this.rolls.push(pins);
  }

  this.getTotal = function(){
    this.score = this.rolls.reduce( (a, b) => a + b, 0);

    for(var i = 0; i < this.rolls.length; i++){
      if(this.rolls[i] === 10){
        strikeCount++;
      }
    }

    if(strikeCount === this.rolls.length && this.rolls.length !== 0){
      this.score = 300;
    }
    
    return this.score;
  }



}
