// strike bonus = 10
'use strict'

class Scorecard {

  constructor(){
    this.totalArr = []
    this.Scores = []
    this.roll1 = 0;
    this.roll2 = 0;
    this.legibleForSpareBonus = false;
    this.legibleForStrikeBonus = false;
  }; 

  input(roll1, roll2){
    this.changeLastFrameBy(roll1,roll2);

    if (this.isSpare(roll1,roll2) === true) { // spare frame
      console.log("spare!");
      this.totalArr.push(roll1);
      this.totalArr.push(roll2);
      this.addtoScore(roll1,roll2)
      this.legibleForSpareBonus = true;

    } else if (this.isStrike(roll1) === true) { // strike frame
      console.log("strike!");
      this.totalArr.push(roll1);
      this.totalArr.push(roll2);
      this.addtoScore(roll1,roll2)
      this.legibleForStrikeBonus = true;

    } else if (this.totalArr.length > 0) { // normal frame
      console.log("normal bowl")
      this.totalArr.push(roll1);
      this.totalArr.push(roll2);
      this.addtoScore(roll1,roll2)
      this.legibleForBonus = false;

    } else {
      console.log("first throw!") // first frame
      this.totalArr.push(roll1);
      this.totalArr.push(roll2);
      this.addtoScore(roll1,roll2)
    }
  }

  changeLastFrameBy(roll1,roll2){
    var roll1 = roll1
    var roll2 = roll2

    if (this.legibleForSpareBonus === true) {
      var spareprevscore = this.totalArr[this.totalArr.length - 1]
      var sparenewscore = spareprevscore + roll1;
      this.totalArr.pop();
      this.totalArr.splice(this.totalArr[this.totalArr.length - 1], 0, sparenewscore)
      this.legibleForSpareBonus = false;

    } else if (this.legibleForStrikeBonus === true) {
      var strikeprevscore = this.totalArr[this.totalArr.length - 1]
      var strikenewscore = strikeprevscore + roll1 + roll2;
      console.log(strikenewscore)
      console.log(strikeprevscore)
      this.totalArr[this.totalArr.length - 1] = strikenewscore;
      // this.totalArr.splice(this.totalArr[this.totalArr.length - 1], 0, strikenewscore)
      this.legibleForStrikeBonus = false; 

    } else {
      return;
    }
  }
 
  addtoScore(roll1,roll2) {
    if (this.previousFrame() === undefined ) {
      this.totalArr.push(this.frameScore(roll1,roll2));
    } else {
      this.totalArr.push(this.frameScore(roll1,roll2) + this.previousFrame());
    }
  }

  previousFrame(){
    return this.totalArr[this.totalArr.length - 3]
  }

  frameScoreBefore(){
    return this.totalArr[this.totalArr.length - 4]
  }

  latestScore(){
    return this.totalArr[this.totalArr.length - 1]
  }

  frameScore(roll1 ,roll2){
    return roll1 + roll2
  }
 
  isSpare(roll1, roll2){
    if (roll1 + roll2 === 10 && roll1 !== 10) {
      return true
    } else {
      return false
    }
  }

  isStrike(roll1){
    if (roll1 === 10) {
      return true
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