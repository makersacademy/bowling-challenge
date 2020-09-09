class Version4 {
  constructor() {
    //this.frames = [];
    this.scores = [];
    this.counter = 0;
    this.frame = undefined;
  }

  play(one, two) {
    if (this.frame == "strike") {
      this.bonus = 10;
    } else if (this.frame == "spare") {
      this.bonus = one;
    } else {
      this.bonus = 0;
    }

    let rez = one + two + this.bonus;
    this.scores.push(rez);

    if (one == 10) {
      this.frame = "strike";
    } else if (one + two == 10) {
      this.frame = "spare";
    } else {
      this.frame = undefined;
    }
    return rez;
  }

  total() {
    return this.scores.reduce((a, b) => a + b, 0);
  }

  // calc() {
  //   let nextFrameRoll_1 = () => {
  //     if (this.scores[this.counter + 1] == undefined) {
  //       return 0;
  //     } else if (this.scores[this.counter + 1] == "Strike") {
  //       return 10;
  //     } else {
  //       return this.scores[this.counter + 1];
  //     }
  //   };
  //   let nextFrameRoll_2 = () => {
  //     if (this.scores[this.counter + 2] == undefined) {
  //       return 0;
  //     } else if (this.scores[this.counter + 2] == "Strike") {
  //       return 10;
  //     } else {
  //       return this.scores[this.counter + 2];
  //     }
  //   };

  //   let result = [];

  //   this.frames.forEach((frame) => {
  //     if (frame == "Strike") {
  //       result.push(10 + nextFrameRoll_1() + nextFrameRoll_2());
  //       this.counter++;
  //     } else if (frame == "Spare") {
  //       result.push(10 + nextFrameRoll_1());
  //       this.counter++;
  //     } else {
  //       result.push(frame);
  //       this.counter++;
  //     }
  //   });

  //   this.scores = result;
  // }

  // calc(one, two) {
  //   if (this.frames[this.counter - 1] == "Spare") {
  //     this.frames[this.counter - 1] = 10 + one;
  //   } else if (this.frames[this.counter - 1] == "Strike") {
  //     console.log(one, two);
  //     this.frames[this.counter - 1] = 10 + one + two;
  //   }
  // }
}
