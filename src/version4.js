class Version4 {
  constructor() {
    this.frames = [];
    this.scores = [];
    this.counter = 0;
  }

  play(one, two) {
    if (one == 10) {
      this.frames.push("Strike");
      this.scores.push(10);
    } else if (one + two == 10) {
      this.frames.push("Spare");
      this.scores.push(one, two);
    } else {
      this.frames.push(one, two);
      this.scores.push(one, two);
    }

    this.counter = 0;
    this.calc();
  }

  calc() {
    let nextFrameRoll_1 = () => {
      if (this.scores[this.counter + 1] == undefined) {
        return 0;
      } else if (this.scores[this.counter + 1] == "Strike") {
        return 10;
      } else {
        return this.scores[this.counter + 1];
      }
    };
    let nextFrameRoll_2 = () => {
      if (this.scores[this.counter + 2] == undefined) {
        return 0;
      } else if (this.scores[this.counter + 2] == "Strike") {
        return 10;
      } else {
        return this.scores[this.counter + 2];
      }
    };

    console.log(nextFrameRoll_1(), nextFrameRoll_2());
    let result = [];

    this.frames.forEach((frame) => {
      if (frame == "Strike") {
        console.log("STRIKE " + this.counter);
        result.push(10 + nextFrameRoll_1() + nextFrameRoll_2());
        this.counter++;
      } else if (frame == "Spare") {
        result.push(10 + nextFrameRoll_1());
        this.counter++;
      } else {
        result.push(frame);
        this.counter++;
      }
    });

    this.scores = result;
  }

  // calc(one, two) {
  //   if (this.frames[this.counter - 1] == "Spare") {
  //     this.frames[this.counter - 1] = 10 + one;
  //   } else if (this.frames[this.counter - 1] == "Strike") {
  //     console.log(one, two);
  //     this.frames[this.counter - 1] = 10 + one + two;
  //   }
  // }
}
