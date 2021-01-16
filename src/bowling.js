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
      else if( this.frameArray[this.frameArray.length - 1].frame.rolls.length === 2 || this.frameArray[this.frameArray.length - 1].firstRoll() === 10 ) {
        this.frameArray.push(new this.frameClass(score));
      }
      else {
        this.frameArray[this.frameArray.length - 1].addRoll(score);
      };
    });
  };

  addSpareBonuses() {
    this.frameArray.forEach((frame, index) => {
      console.log(this.frameArray[index].frame.rolls.length)
      if(this.frameArray[index].rollScore() === 10 && this.frameArray[index].frame.rolls.length === 2){
        frame.addBonus(this.frameArray[index + 1].firstRoll())
      }
    });
  };

  addStrikeBonuses() {
    this.frameArray.forEach((frame, index) => {
      if(this.frameArray[index].rollScore() === 10 && this.frameArray[index].frame.rolls.length === 1) {
        console.log(this.frameArray[index])
        frame.addBonus(this.frameArray[index + 1].firstRoll())
        frame.addBonus(this.frameArray[index + 1].frame.rolls[1])
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
