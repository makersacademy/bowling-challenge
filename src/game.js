class BowlingGame {

  constructor(turns) {
    this.turns = [];
    this.score = 0
  }

  play(firstBowl, secondBowl) {
    var turn = new Turn(firstBowl, secondBowl);
    this.turns.push(turn);
  }
}
