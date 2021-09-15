class Game {

  constructor(frame = Frame) {
    this.score = 0;
    // this.frames = Array(10).fill(new frame());
    // this.frames = [frame, frame, frame, frame, frame, frame, frame, frame, frame, frame];
    this.frames = [new frame(), new frame(), new frame(), new frame(), new frame(), new frame(), new frame(), new frame(), new frame(), new frame()];
    // this.frames = [new Frame(), new Frame(), new Frame(), new Frame(), new Frame(), new Frame(), new Frame(), new Frame(), new Frame(), new Frame()];

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


      this.frames[i].addScore(roll_1);
      console.log(this.frames)

    }

  }

}

// test = new Game();
// game.play;
