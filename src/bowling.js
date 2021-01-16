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
    console.log(this.frameArray)
    this.accumulator()


    return this.outputArray;
  };

  scoresToFrames() {
    this.scoreArray.forEach((score, index) => {
      if(index % 2 === 0) {
        this.frameArray.push(score);
      }
      else {
        console.log(this.frameArray[index])
        this.add(score)
      };
    });
  };

  add(score) {
    this.frameArray[this.frameArray.length - 1] += score;
  };

  addSpares() {
    this.frameArray.forEach((frameScore, index) => {
      if(frameScore === 10){
        this.frameArray[index] += this.frameArray[index + 1]
      }
    });
  };

  accumulator() {
    this.frameArray.forEach((frame, index) => {
      if(index === 0){
        this.outputArray.push(this.frameArray[index])
      }
      else {
        this.outputArray.push(this.outputArray[index - 1 ] + this.frameArray[index])
      }
    });

  }





};
