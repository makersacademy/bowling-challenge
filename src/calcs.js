class Xy {
  constructor() {
    this.frames = [];
    this.scores = [];
    this.counter = 0;
  }

  play(one, two) {
    if (one == "Strike") {
      this.frames.push("Strike");
    } else if (one + two == 10) {
      this.frames.push("Spare");
    } else {
      this.frames.push(one, two);
    }

    this.counter = 0;
    this.calc();
  }

  calc() {
    this.frames.forEach((frame) => {
      let nextRoll = () => {
        if (this.frames[this.counter + 1] == undefined) {
          return 0;
        } else if (this.frames[this.counter + 1] == "Strike") {
          return 10;
        } else if (this.frames[this.counter + 1] == "Spare") {
          return 5;
        } else {
          return this.frames[this.counter + 1];
        }
      };

      let twoRolls = () => {
        if (this.frames[this.counter + 2] == undefined) {
          return 0;
        } else if (this.frames[this.counter + 2] == "Strike") {
          return 10;
        } else if (this.frames[this.counter + 2] == "Spare") {
          return 5;
        } else {
          return this.frames[this.counter + 2];
        }
      };

      if (frame == "Strike") {
        this.scores[this.counter] = 10 + nextRoll() + twoRolls();
        this.counter++;
      } else if (frame == "Spare") {
        this.scores[this.counter] = 10 + nextRoll();
        this.counter++;
      } else {
        this.scores.push(frame);
        this.counter++;
      }
    });
  }
}
