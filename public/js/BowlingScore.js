"use strict";

var Game = function(){
  this.rolls = [];
  var score = 0;
  var frameScore = 0;

  this.roll = function(pins){
    this.rolls.push(pins);
  }

  this.getTotal = function(){
    for(var i = 0; i < this.rolls.length; i++){
      if(this.rolls[i] === 10){
        if(i === this.rolls.length - 2){
          break;
        }
        frameScore = this.rolls[i]+this.rolls[i+1]+this.rolls[i+2];
        score = score + frameScore;
      } else if(this.rolls[i]+this.rolls[i+1] === 10){
        frameScore = this.rolls[i]+this.rolls[i+1]+this.rolls[i+2];
        score = score + frameScore;
        if(i === this.rolls.length - 3){
          break;
        }
        i++;
      } else {
        score += frameScore + this.rolls[i];
      }
      frameScore = 0;
    }

    return score;
  }



}
