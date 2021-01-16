'use strict';

class Bowling {

  constructor() {
    this.outputArray = [];
  };

  score(scoreArray) {
    scoreArray.forEach((score, index) => {
      if(index % 2 === 0) {
        this.outputArray.push(this.lastOutputArrayElement());
      }

      this.add(score);
    });

    return this.outputArray;
  };

  add(score) {
    this.outputArray[this.outputArray.length - 1] += score;
  };

  lastOutputArrayElement() {
    if(this.outputArray.length === 0){
      return 0;
    }
    else {
      return this.outputArray[this.outputArray.length - 1];
    };
  };
};
