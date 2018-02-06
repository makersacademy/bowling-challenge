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

  results(rolls) {
    let start = 0
    let board = this.board
    rolls.forEach(function(roll) {
    board[start].roll(roll);
    let previous = board.slice(0, start)
    previous.forEach(function(frame) {
      frame.roll(roll);
    })
    if (board[start].isFinished()) { start += 1;}
    });
  }

  score() {
   return this.board.reduce((a, b) => a + b.score(), 0)
  }


}

module.exports = Game;
