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
    console.log(this.frameArray)
    this.addSpareBonuses()
    this.addStrikeBonuses()
    this.accumulator()

    return this.outputArray;
  };

  scoresToFrames() {
    this.scoreArray.forEach((score, index) => {
      if( this.frameArray.length === 0 ){
        this.frameArray.push(new this.frameClass(score));
      }
      else if( this.frameArray[this.frameArray.length - 1].isComplete() && this.frameArray.length < 10) {
        this.frameArray.push(new this.frameClass(score));
      }
      else {
        this.frameArray[this.frameArray.length - 1].addRoll(score);
      };
    });
  };

  addSpareBonuses() {
    this.frameArray.forEach((frame, index) => {
      if(this.frameArray[index].isSpare()){
        frame.addBonus(this.frameArray[index + 1].firstRoll())
      }
    });
  };

  addStrikeBonuses() {
    this.frameArray.forEach((frame, index) => {
      if(this.frameArray[index].isStrike()) {
        frame.addBonus(this.frameArray[index + 1].firstRoll())
        if(this.frameArray[index + 1].isStrike()) {
          frame.addBonus(this.frameArray[index + 2].firstRoll())
        }
        else {
          frame.addBonus(this.frameArray[index + 1].secondRoll())
        }
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
