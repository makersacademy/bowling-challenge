class Game {

  constructor(frame = new Frame()) {
    this.score = 0;
    this.frames = Array(10).fill(frame);
  }

  returnFrameScores() {
    return this.frames.map((frame, index) => {
      return frame.score;
    });
  }

  play() {
    for (let i = 0; i < 2; i++) {
      let roll_1;
      let roll_2;

      do {
        roll_1 = Number(prompt("How many pins did you knock down?: "));
      }
      while (roll_1 <= 0 || roll_1 > 10);

      console.log("frame 0 before:")
      console.log(this.frames[i]);
      console.log("frame 7 before:")
      console.log(this.frames[7]);
      console.log("i:")
      console.log(i)
      this.frames[i].addScore(roll_1);
      console.log("frame 0 after:")
      console.log(this.frames[i]);
      console.log("frame 7 after:")
      console.log(this.frames[7]);

      console.log(this.frames);
    }

  }

}

// test = new Game();
// game.play;
