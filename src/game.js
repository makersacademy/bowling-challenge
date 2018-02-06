const GAME_LENGTH = 10;
const FINAL_GAME_STRIKE = 3;

class Game {
  constructor(Frame) {
    this.board = [];
    for (let i = 0; i < GAME_LENGTH - 1; i += 1) {
      this.board.push(new Frame());
    }
    this.board.push(new Frame(FINAL_GAME_STRIKE, FINAL_GAME_STRIKE));
  }

  play(rolls) {
    let index = 0
    let board = this.board
    rolls.forEach(function(roll) {
    board[index].roll(roll);
    let previous = board.slice(0, index)
    previous.forEach(function(frame) {
      frame.roll(roll);
    })
    if (board[index].isFinished()) { index += 1;}
    });
  }

  score() {
    return this.board.reduce((a, b) => a + b.score(), 0);
  }


}

module.exports = Game;
