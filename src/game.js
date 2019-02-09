class BowlingGame {

  constructor(turns) {
    this.turns = [];
    this.score = 0
    this.bonus = 0
  }

  play(firstBowl, secondBowl = 0) {
    this.previousTurnBonus(firstBowl, secondBowl)
    if (this.deservesBonus(firstBowl, secondBowl)) {
      this.addBonus(firstBowl, secondBowl)
    } else {
      this.countScore(firstBowl, secondBowl)
    }
    this.enterTurn(firstBowl, secondBowl)
    return this.score
  }

  enterTurn(firstBowl, secondBowl) {
    var turn = new Turn(firstBowl, secondBowl);
    this.turns.push(turn);
  }

  countScore(firstBowl, secondBowl) {
    this.score += (firstBowl + secondBowl);
    this.score += this.bonus;
    this.bonus = 0;
  }

  deservesBonus(firstBowl, secondBowl) {
    return (this.strike(firstBowl) || this.spare(firstBowl, secondBowl))
  }

  addBonus(firstBowl, secondBowl) {
    this.bonus += (firstBowl + secondBowl);
  }

  previousTurnBonus(firstBowl, secondBowl) {
    if (this.turns.length > 0) {
      if (this.strike(this.lastTurnFirstBowl(), this.lastTurnSecondBowl())) {
        this.addBonus(firstBowl, secondBowl);
      } else if (this.spare(this.lastTurnFirstBowl(), this.lastTurnSecondBowl())) {
        this.addBonus(firstBowl, 0);
      }
    }
  }

  strike(firstBowl) {
    return firstBowl === 10
  }

  spare(firstBowl, secondBowl) {
    return firstBowl + secondBowl === 10 && firstBowl != 10
  }

  lastTurnFirstBowl() {
    return this.turns[(this.turns.length -1)].firstBowl
  }

  lastTurnSecondBowl() {
    return this.turns[(this.turns.length -1)].secondBowl
  }

}
