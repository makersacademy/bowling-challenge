import Frame from './frame.js';

class Game {
  constructor() {
    this.scores = [];
    this.currentFrame = new Frame();
  }

  add(pins) {
    if (
      this.scores.length == 0 ||
      this.scores[this.scores.length - 1].length == 2
    ) {
      this.currentFrame.add(pins);
      this.scores.push(this.currentFrame.scores);
    } else {
      this.currentFrame.add(pins);
      console.log(this.currentFrame);
      console.log(this.scores);
      // this.scores[-1].push(frame.scores);
    }
  }
}

export default Game;
