const GAME_LENGTH = 10;
const FINAL_GAME_STRIKE = 3;

class Game {
  constructor(frame) {
    this.Frames = frame;
    this.board = this.setUpBoard();
  }

  play(roll) {
    const runningFrame = this.currentFrame();
    this.addRoll(runningFrame, roll);
    if (runningFrame > 0) { this.addRoll(runningFrame - 1, roll); }
    if (runningFrame > 1) { this.addRoll(runningFrame - 2, roll); }
  }

  setUpBoard() {
    const board = [];
    for (let i = 0; i < GAME_LENGTH - 1; i += 1) {
      board.push(new this.Frames());
    }
    board.push(new this.Frames(FINAL_GAME_STRIKE, FINAL_GAME_STRIKE));
    return board;
  }

  currentFrame() {
    let index = 0;
    this.board.forEach((frame) => {
      if (!frame.isFinished()) { return index; }
      index += 1;
    });
    return index;
  }

  addRoll(index, roll) {
    this.board[index].roll(roll);
  }

  score() {
    return this.board.reduce((a, b) => a + b.score(), 0);
  }

  runningScores() {
    const results = [];
    this.board.forEach((frame) => { results.push(frame.score()); });
    return results;
  }

  view() {
    const views = [];
    this.board.forEach((frame) => { views.push(frame.view()); });
    return views;
  }
}

module.exports = Game;
