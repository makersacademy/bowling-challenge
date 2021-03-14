'use strict';

class BowlingScorecard {
  constructor(){
    this.total_score = 0;
  }

recordRoll(userInput){
  this.total_score += userInput;
}
totalScore(){
  return this.total_score;
}

}