'use strict';


class Scorecard {

  constructor() {
    this.STARTING_SCORE = 0;
    this.score = this.STARTING_SCORE;
    this.bonusScore = this.STARTING_SCORE
    this.previousFrame = 0;
    this.strikesCount = [];
    this.strikeSum = 0;
  }

  isPreviousFrameSpare() {
    return this.previousFrame > 9;
  }

  calculateStrikeTally(){
    if (this.strikesCount.length == 1){
      this.strikeSum += (this.strikesCount[1] + this.strikesCount[2] + 
      this.strikesCount[3]);
    }
    else {
      for (let i = 0; (i < this.strikesCount.length - 2); i++) {
        this.strikeSum += (this.strikesCount[i] + this.strikesCount[i + 1] + 
        this.strikesCount[i + 2]);
      }
      }
  }

  roll(value){
    if ((value === "X") && (this.isPreviousFrameSpare())) {
      this.score += 10 ;
      this.strikesCount.push(10);
      this.previousFrame = 0;
    }
    else if (value === "X") {
      this.strikesCount.push(10);
    }
    else {
      if (this.isPreviousFrameSpare()){
        this.score += (value[0] * 2);
        this.score += value[1];
      } 
      else if (this.strikesCount.length > 0 ){
        this.strikesCount.push(value[0]);
        this.strikesCount.push(value[1]);
        this.calculateStrikeTally();
        this.score += (this.strikeSum + value[0] + value[1]);
      }
      else {
        this.score += value[0];
        this.score += value[1];
      }
    this.resetValues();
    this.previousFrame = value[1] + value[0];
    }  
  }

  rollTenthFrame(value) {
    if (value[0] === "X" && value[1] === "X" && value[2] === "X") {
      this.score += 10 ;
      this.rollBonusFrame(20);
    }
    else if (value[0] === "X" && value[1] === "X" && value[2] !== "X") {
      this.score += 10 ;
      this.rollBonusFrame(10 + value[2]);
    }
    else if (value[0] === "X" && value[1] !== "X") {
      this.score += 10 ;
      this.rollBonusFrame(value[1] + value[2]);
     } 
    else if ((value[0]+ value[1]) > 9) {
      this.score += (value[0] + value[1]);
      this.rollBonusFrame(value[2]);
      // will need to update this to capture a value store it and call 
    }
    else {
    this.score += (value[0] + value[1]);
    }
  }

  rollBonusFrame(value){
    this.bonusScore += value;
  }

  getCurrentScore() {
    return this.score;
  }

  getBonusScore(){
    return this.bonusScore;
  }

  resetValues(){
    this.strikesCount = [];
    this.strikeSum = 0;
  }

  getFinalScore(){
    if (this.strikesCount.length === 9 && this.bonusScore === 20) {
      return 'Perfect Game: 300 points';
    } 
    else if (this.bonusScore === 0 && this.score === 0){
      return 'Nil pois : 0 points';
    }
    else {
      return 'You scored:' + (this.bonusScore + this.score) + ' points.' ;
    }
  };
  

};

