'use strict';

class Bowling {

  constructor() {
    this.scoreArray = [];
    this.frameArray = [];
    this.outputArray = [];
  };

  score(scoreArray) {
    this.scoreArray = scoreArray
    this.scoresToFrames()
    this.addSpares()
    this.accumulator()

    return this.outputArray;
  };

  scoresToFrames() {
    this.scoreArray.forEach((score, index) => {
      if(index % 2 === 0) {
        this.frameArray.push([score]);
      }
      else {
        this.frameArray[this.frameArray.length - 1].push(score);
      };
    });
  };

  addSpares() {
    this.frameArray.forEach((frame, index) => {
      if(this.sumFrame(index) === 10){
        frame.push(this.frameArray[index + 1][0])
      }
    });
  };

  accumulator() {
    this.frameArray.forEach((frame, index) => {
      if(index === 0){
        this.outputArray.push(this.sumFrame(index))
      }
      else {
        this.outputArray.push(this.outputArray[index - 1 ] + this.sumFrame(index))
      }
    });
  }

  sumFrame(index) {
    let sum = 0;

    this.frameArray[index].forEach((roll, i) => {
      sum += roll;
    });

    return sum;
  }
};
