// strike bonus = 10
'use strict'

class Scorecard {

  constructor(){
    this.totalArr = []
    this.Scores = []
    this.legibleForSpareBonus = false;
    this.legibleForStrikeBonus = false;
  }; 

  input(roll1, roll2){
    this.changeLastFrameBy(roll1,roll2);

    if (this.isSpare(roll1,roll2) === true) { 
      this.generateGame(roll1,roll2)
      this.legibleForSpareBonus = true;

    } else if (this.isStrike(roll1) === true) {
      this.generateGame(roll1,roll2)
      this.legibleForStrikeBonus = true;

    } else { 
      this.generateGame(roll1,roll2)
      this.legibleForBonus = false;
    } 
  }

  generateGame(roll1,roll2) {
    this.pushBowlsToScorecard(roll1,roll2);
    this.addtoScore(roll1,roll2)
  }
  

  changeLastFrameBy(roll1,roll2){
    if (this.legibleForSpareBonus === true) {
      this.spareBonusPoints(roll1)
    } else if (this.legibleForStrikeBonus === true) {
      this.strikeBonusPoints(roll1, roll2)
    } else {
      return;
    }
  }

  spareBonusPoints(roll1){
    var spareprevscore = this.totalArr[this.totalArr.length - 1]
    var sparenewscore = spareprevscore + roll1;
    this.totalArr.pop();
    this.totalArr.splice(this.totalArr[this.totalArr.length - 1], 0, sparenewscore)
    this.legibleForSpareBonus = false;
  }

  strikeBonusPoints(roll1, roll2) {
    var strikeprevscore = this.totalArr[this.totalArr.length - 1]
    var strikenewscore = strikeprevscore + roll1 + roll2;
    this.totalArr[this.totalArr.length - 1] = strikenewscore;
    this.legibleForStrikeBonus = false; 
  }
 
  addtoScore(roll1,roll2) {
    if (this.previousFrame() === undefined ) {
      this.totalArr.push(this.frameScore(roll1,roll2));
    } else {
      this.totalArr.push(this.frameScore(roll1,roll2) + this.previousFrame());
    }
  }

  pushBowlsToScorecard(roll1,roll2){
    this.totalArr.push(roll1);
    this.totalArr.push(roll2);
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

  totalScore(){
    var totalScore = 0;
      for (var i = 0, len = this.frameScoreslength; i < len; i++) {
        totalScore += totalArr[i];
      }
    return totalScore
  }

}
