'use strict';

class Game {

  constructor() {
    this.totalScore = 0;
    this.frames = [];
  }

  addScore(number) {
    this.totalScore += number;
  }


  addFrame(frame){
    this.frames.push(frame)
    // this.calculateTotalScore()
  }

  addLastFrame(frame){
    this.frames.push(frame)
    // this.calculateTotalScore()
  }

  calculateTotalScore() {
    var total = 0
    // console.log("This frames")
    // console.log(this.frames)
    // console.log("This totalscore")
    // console.log(this.totalScore)

    this.frames.forEach(function (value, index, array) {
      total += value.reduce(function(a, b){
        return a + b;
      }, 0);
    });

    this.totalScore = total
  }

}
