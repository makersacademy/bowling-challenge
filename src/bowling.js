'use strict';

class Bowling {

  constructor() {
    this.outputArray = [];
    this.outputArrayIndex = 0;
  }

  score(scoreArray) {
    scoreArray.forEach((score, index) => {
      if(index % 2 === 0) {
        this.outputArray.push(score);
      }
      else {
        this.outputArray[this.outputArrayIndex] += score;
        this.outputArrayIndex ++;
      }
    });
    console.log(this.outputArray)
    return this.outputArray;
  }
}
