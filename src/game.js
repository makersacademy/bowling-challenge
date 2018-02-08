const GAME_LENGTH = 10;
const FINAL_GAME_STRIKE = 3;

class Game {
  constructor(frame) {
    this.board = [];
    this.Frames = frame;
    for (let i = 0; i < GAME_LENGTH - 1; i += 1) {
      this.board.push(new this.Frames());
    }
    this.board.push(new this.Frames(FINAL_GAME_STRIKE, FINAL_GAME_STRIKE));
  }

  play(rolls) {
    let index = 0;
    rolls.forEach((roll) => {
      this.addRoll(index, roll)
      if (index > 0) { this.addRoll(index - 1, roll); }
      if (index > 1) { this.addRoll(index - 2, roll); }
      if (this.frameFinished(index)) { index += 1; }
    });
  }

  addRoll(index, roll) {
    this.board[index].roll(roll);
  }

  frameFinished(index) {
    return this.board[index].isFinished();
  }

  score() {
    return this.board.reduce((a, b) => a + b.score(), 0);
  }
}

module.exports = Game;
