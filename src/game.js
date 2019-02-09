class BowlingGame {

  constructor(turns) {
    this.turns = [];
    this.score = 0
  }

  play(firstBowl, secondBowl = 0) {
    this.enterTurn(firstBowl, secondBowl)
    this.countScore(firstBowl, secondBowl)
    return this.score
  }

  enterTurn(firstBowl, secondBowl) {
    var turn = new Turn(firstBowl, secondBowl);
    this.turns.push(turn);
  }

  countScore(firstBowl, secondBowl) {
    this.score += firstBowl
    this.score += secondBowl
  }

  deservesBonus(firstBowl, secondBowl) {
    return (this.strike(firstBowl) || this.spare(firstBowl, secondBowl))
  }

  strike(firstBowl) {
    return firstBowl === 10
  }

  spare(firstBowl, secondBowl) {
    return firstBowl + secondBowl === 10 && firstBowl != 10
  }

}
