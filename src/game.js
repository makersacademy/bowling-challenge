"use strict";

class BowlingGame {

  constructor(turns) {
    this.turns = [];
    this.score = 0
    // this.bonus = 0
    this.scorecard = [];
  }

  play(firstBowl, secondBowl = 0, thirdBowl = null) {
    this.previousTurnBonus(firstBowl, secondBowl);
    this.pastTwoStrikes(firstBowl);
    this.countScore(firstBowl, secondBowl)
    this.enterTurn(firstBowl, secondBowl, thirdBowl)
    this.checkIfTenthFrame(firstBowl, secondBowl, thirdBowl)
    return this.score
  }

  checkIfTenthFrame(firstBowl, secondBowl, thirdBowl = 0) {
    if (this.turns.length === 10) {
      this.countScore(thirdBowl)
    }
  }

  enterTurn(firstBowl, secondBowl = 0, thirdBowl = null) {
    var turn = new Turn(firstBowl, secondBowl, thirdBowl);
    this.turns.push(turn);
  }

  countScore(firstBowl, secondBowl = 0) {
    this.score += (firstBowl + secondBowl);
    // this.score += this.bonus;
    // this.bonus = 0;
  }


  // bonusCheck(firstBowl, secondBowl = 0) {
  //   if (this.strikeOrSpare(firstBowl, secondBowl)) {
  //     this.addBonus(firstBowl, secondBowl);
  //   } else {
  //     this.countScore(firstBowl, secondBowl);
  //   }
  // }

  // addBonus(firstBowl, secondBowl = 0) {
  //   this.bonus += (firstBowl + secondBowl);
  // }

  previousTurnBonus(firstBowl, secondBowl = 0) {
    if (this.lastTurn()) {
      if (this.lastTurn().isStrike()) {
        this.countScore(firstBowl, secondBowl);
      } else if (this.lastTurn().isSpare()) {
        this.countScore(firstBowl);
      }
    }
  }

  pastTwoStrikes(firstBowl) {
    if (this.secondLastTurn()) {
      if (this.lastTurn().isStrike() && this.secondLastTurn().isStrike()) {
        this.countScore(firstBowl);
      }
    }
  }

  lastTurn() {
    return this.turns[this.turns.length -1]
  }

  secondLastTurn() {
    return this.turns[(this.turns.length -2)]
  }

}
