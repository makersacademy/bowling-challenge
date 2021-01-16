'use strict';

class Bowling {

  constructor(frameClass = Frame) {
    this.frameClass = frameClass;
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
        this.frameArray.push(new this.frameClass(score));
      }
      else {
        this.frameArray[this.frameArray.length - 1].addRoll(score);
      };
    });
  };

  addSpares() {
    this.frameArray.forEach((frame, index) => {
      if(this.frameArray[index].rollScore() === 10){
        frame.addBonus(this.frameArray[index + 1].firstRoll())
      }
    });
  };

  accumulator() {
    this.frameArray.forEach((frame, index) => {
      if(index === 0){
        this.outputArray.push(this.frameArray[index].totalScore())
      }
      else {
        this.outputArray.push(this.outputArray[index - 1 ] + this.frameArray[index].totalScore())
      }
    });
  }
};
