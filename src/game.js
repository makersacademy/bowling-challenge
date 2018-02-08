const GAME_LENGTH = 10;
const FINAL_GAME_STRIKE = 3;

class Game {
  constructor(frame) {
    this.board = [];
    this.Frames = frame
    for (let i = 0; i < GAME_LENGTH - 1; i += 1) {
      this.board.push(new this.Frames());
    }
    this.board.push(new this.Frames(FINAL_GAME_STRIKE, FINAL_GAME_STRIKE));
  }

  play(rolls) {
    let index = 0;
    const board = this.board;
    rolls.forEach((roll) => {
      board[index].roll(roll);
      if (index > 0) { board[index - 1].roll(roll); }
      if (index > 1) { board[index - 2].roll(roll); }
      if (board[index].isFinished()) { index += 1; }
    });
  }

  score() {
    return this.board.reduce((a, b) => a + b.score(), 0);
  }


}

module.exports = Game;
