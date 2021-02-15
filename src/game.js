"use strict";

class Game {

  constructor() {
    this.totalScore = 0;
    this.frameNumber = 1;
    this.bowlNumber = 1;
    this.frames = this.newFrames()
  }

  enterScore(score) {
    this.frames.forEach((frame) => {
      if(frame.isMissingBonus()) {
        frame.addBonusScore(score)
      }
    });
    this.frames[this.frameNumber - 1].addScore(score)
    if(this.frames(this.frameNumber - 1).isComplete()) {
      this.frameNumber ++;
    } else {
      this.bowlNumber ++;
    }
  }

  newFrames() {
    let framesArr = []
    for(let i = 0; i < 9; i++) {
      framesArr.push(new Frame)
    }
    framesArr.push(new Frame({finalFrame: true}))
    return framesArr
  }

  totalScore() {
    return this.frames.reduce((score, frame) => {
      return score + frame.totalScore()
    }, 0)
  }


}

Game
