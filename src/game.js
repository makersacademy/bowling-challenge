class BowlingGame {

  constructor(turns) {
    this.turns = [];
    this.score = 0
    this.bonus = 0
  }

  play(firstBowl, secondBowl = 0, thirdBowl = null) {
    this.previousTurnBonus(firstBowl, secondBowl);
    this.pastTwoStrikes(firstBowl);
    this.bonusCheck(firstBowl, secondBowl)
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
    this.score += this.bonus;
    this.bonus = 0;
  }

  strikeOrSpare(firstBowl, secondBowl = 0) {
    return (this.strike(firstBowl) || this.spare(firstBowl, secondBowl))
  }

  bonusCheck(firstBowl, secondBowl = 0) {
    if (this.strikeOrSpare(firstBowl, secondBowl)) {
      this.addBonus(firstBowl, secondBowl);
    } else {
      this.countScore(firstBowl, secondBowl);
    }
  }

  addBonus(firstBowl, secondBowl = 0) {
    this.bonus += (firstBowl + secondBowl);
  }

  previousTurnBonus(firstBowl, secondBowl = 0) {
    if (this.turns.length > 0) {
      if (this.strike(this.lastTurnFirstBowl(), this.lastTurnSecondBowl())) {
        this.addBonus(firstBowl, secondBowl);
      } else if (this.spare(this.lastTurnFirstBowl(), this.lastTurnSecondBowl())) {
        this.addBonus(firstBowl, 0);
      }
    }
  }

  pastTwoStrikes(firstBowl) {
    if (this.turns.length >= 2) {
      if (this.strike(this.lastTurnFirstBowl(), this.lastTurnSecondBowl()) && this.strike(this.secondLastTurnFirstBowl(), this.secondLastTurnSecondBowl())) {
        this.addBonus(firstBowl);
      }
    }
  }

  strike(firstBowl) {
    return firstBowl === 10
  }

  spare(firstBowl, secondBowl = 0) {
    return firstBowl + secondBowl === 10 && firstBowl != 10
  }

  lastTurnFirstBowl() {
    return this.turns[(this.turns.length -1)].firstBowl
  }

  lastTurnSecondBowl() {
    return this.turns[(this.turns.length -1)].secondBowl
  }

  secondLastTurnFirstBowl() {
    return this.turns[(this.turns.length -2)].firstBowl
  }

  secondLastTurnSecondBowl() {
    return this.turns[(this.turns.length -2)].secondBowl
  }

}
