'use strict';

class Bowling {

  constructor() {
    this.outputArray = [];
  }

  score(scoreArray) {
    scoreArray.forEach((score, index) => {
      if(index % 2 === 0) {
        this.outputArray.push(score);
      }
    });

    return this.outputArray;
  }
}
