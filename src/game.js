class BowlingGame {

  constructor(turns) {
    this.turns = [];
    this.score = 0
  }

  play(firstBowl, secondBowl) {
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
}
