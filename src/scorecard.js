// strike bonus = 10
'use strict'

class Scorecard {

  constructor(){
    this.totalArr = []
    this.Scores = []
    this.roll1 = 0;
    this.roll2 = 0;
    this.bowledSpare = false;
    this.bowledStrike = false;
  }; 

  input(roll1, roll2){
    if (this.isSpare(roll1,roll2) === true) {
      console.log("spare!");
      this.totalArr.push(roll1);
      this.totalArr.push(roll2);
      this.totalArr.push(this.frameScore(roll1,roll2) + this.previousFrame());
      // this.bowledSpare = true;

    } else if (this.isStrike(roll1,roll2) === true) {
      // console.log("strike!");

    } else if (this.totalArr.length > 0) { // first frame
      console.log("normal bowl")
      this.totalArr.push(roll1);
      this.totalArr.push(roll2);
      this.totalArr.push(this.frameScore(roll1,roll2) + this.previousFrame());
    } else {
      console.log("first throw!")
      this.totalArr.push(roll1);
      this.totalArr.push(roll2);
      this.totalArr.push(this.frameScore(roll1,roll2));
    }
  }

  bowledSpare(){
    this.totalArr[this.totalArr.length - 2] + this.totalArr[this.totalArr.length - 1] === 10
  }

  previousFrame(){
    return this.totalArr[this.totalArr.length - 3]
  }

  // nextBowl(){
  //   return this.totalArr[this.totalArr.length + 1]
  // }

  latestScore(){
    return this.totalArr[this.totalArr.length - 1]
  }

  // frameScore(roll1 ,roll2){
  //   if (this.bowledSpare === true) {
  //     previousscore = this.previousFrame()
  //     newscore = roll1 + previousscore
  //     this.totalArr[this.totalArr.length - 3] = newscore 
  //   }
  //   return roll1 + roll2
  // }
 
  isSpare(roll1, roll2){
    if (roll1 + roll2 === 10){
      return true
    }
    else {
      return false
    }
  }

  isStrike(roll1, roll2){
    if (roll1 === 10) {
      return true
    } else if (roll2 === 10) {
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

console.log(this.totalArr)