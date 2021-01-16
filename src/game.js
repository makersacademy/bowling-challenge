class Game {

  constructor() {
    this.score = 0;
    this.frames = Array(10).fill(new Frame());
  }

  returnFrameScores() {
    return this.frames.map((frame, index) => {
      return frame.score;
    });
  }

  play() {
    for (let i = 0; i < 1; i++) {
      let roll_1;
      let roll_2;

      do {
        roll_1 = Number(prompt("How many pins did you knock down?: "));
      }
      while (roll_1 <= 0 || roll_1 > 10);

      this.frames[i].addScore(roll_1);

      return this.frames;
    }

  }

}

// test = new Game();
// game.play;
