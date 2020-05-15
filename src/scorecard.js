// strike bonus = 10
'use strict'

class Scorecard {

  constructor(){
    this.totalArr = []
    this.Scores = []
    this.roll1 = 0;
    this.roll2 = 0;
  };

 

  input(roll1, roll2){
    if (this.isSpare(roll1,roll2) === true) {
      console.log("spare!");
    } else if (this.isStrike(roll1,roll2) === true) {
      console.log("strike!");
    } else {
      console.log("normal score!")
      this.totalArr.push(roll1);
      this.totalArr.push(roll2);
      this.totalArr.push(scorecard.frameScore(roll1,roll2));
    }
  }

  frameScore(roll1 ,roll2){
    return roll1 + roll2
  }
 
  isSpare(roll1, roll2){
    if (roll1 + roll2 === 10){
      return true
    }
    else {
      return false
    }
  }

  isStrike(roll1, roll2){
    if (roll1 || roll2 === 10){
      return true
    }
    else {
      return false
    }
  }

  // overall score
  totalScore(){
    var totalScore = 0;
      for (var i = 0, len = this.frameScoreslength; i < len; i++) {
        totalScore += totalArr[i];  // Iterate over your first array and then grab the second element add the values up
      }
    return totalScore
  }

}