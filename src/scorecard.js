// strike bonus = 10
'use strict'

class Scorecard {

  constructor(){
    this.totalArr = []
    this.frameScore = 0; 
  };

  totalScore(){
    var totalScore = 0;
      for (var i = 0, len = this.totalArr.length; i < len; i++) {
        totalScore += totalArr[i];  // Iterate over your first array and then grab the second element add the values up
      }
    return totalScore
  }

  knockDownPins(roll1, roll2){
    this.roll1 = roll1
    this.roll2 = roll2
    var score = roll1 + roll2
    this.totalArr.push(score)
    return score
  }

  isSpare(){
    if (this.roll1 + this.roll2 === 10){
      return true
    }
    else {
      return false
    }
  }

  isStrike(){
    if (this.roll1 || this.roll2 === 10){
      return true
    }
    else {
      return false
    }
  }



}