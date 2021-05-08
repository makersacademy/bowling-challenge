'use strict';

class Bowling {
  constructor(frame = 1, totalScore = 0) {
  this.frame = frame
  this.totalScore = totalScore
  }
  message() {
    return `You are currently on Frame ${this.frame}, with a total score of ${this.totalScore}.`
  }

}