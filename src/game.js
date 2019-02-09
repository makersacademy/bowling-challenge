class Game {

  constructor(turns) {
    this.turns = [];
  }

  play(firstBowl, secondBowl) {
    var turn = new Turn(firstBowl, secondBowl);
    this.turns.push(turn);
  }
}
