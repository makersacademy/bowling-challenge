'use strict';

class Bowling {
  constructor() {
    this.currentRound = 1
    this.currentBall = 1
    this.scorecard = [[null, null], [null, null], [null, null], [null, null], [null, null], [null, null], [null, null], [null, null], [null, null], [null, null]]
  }

  getCurrentRound() {
    return this.currentRound
  }

  getCurrentBall() {
    return this.currentBall
  }

  // inputPins(pins) {
  //   if (this.currentBall === 1) {
  //     this.firstPin = pins;
  //     this.currentBall += 1;
  //   }
  //   else if (this.currentBall === 2) {
  //     (this.scorecard).push([this.firstPin, pins]);
  //     this.currentBall = 1;
  //   }
  // }

  inputPins(pins) {
    this.scorecard[this.currentRound - 1][this.currentBall - 1] = pins;
    this.currentBall += 1;
    if (this.currentBall === 3) {
      this.currentBall = 1;
      this.currentRound += 1;
    }
  }

  showScorecard() {
    return this.scorecard
  }
}