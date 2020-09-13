"use strict;";
class Bowling {

  constructor() {
    this.strikeOrSpare = 0;
    this.total = 0;
  } 

  frame(score1, score2) { 
    if  (score1 == 10) {
      this.strikeOrSpare += 2
      this.total += 10
    } else if (( score1 + score2) == 10) {
      this.strikeOrSpare += 1
      this.total += 10
    } else {
      this.total += (score1 + score2)
    }
  }
  extraScore(score1, score2) {
    if (this.strikeOrSpare >= 2) {
        if (score2 == 0){
          this.total += score1
          this.strikeOrSpare -= 1
        } else if ((score1 + score2) == 10){
          this.total += 10
          this.strikeOrSpare -= 1
        } else {
          this.total += (score1 + score2)
          this.strikeOrSpare -= 2
        };
    } else if (this.strikeOrSpare = 1){
        this.total += score1 
        this.strikeOrSpare -=1
    } else {
        return
    };
  };
  firstTurn(score1, score2) {
    this.frame(score1, score2)
    return this.total
  }

  nextTurn(score1, score2) {
    this.frame(score1, score2)
    this.extraScore(score1, score2)
    return this.total
  }
};