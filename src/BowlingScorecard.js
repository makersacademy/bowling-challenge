'use strict';

class BowlingScorecard {
  constructor() {
    this.total_score = 0;
  }

recordRoll(userInput){
  if (isNaN(userInput)) {throw "Can only record numbers"}
  else if (userInput > 10) {throw "Scores must be 0-10"}
  else {this.total_score += userInput;}
}
totalScore(){
  return this.total_score;
}

}