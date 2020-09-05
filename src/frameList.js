class FrameList {
  constructor() {
    this.frames = [];
  }

  add(roll_1, roll_2) {
    let total = roll_1 + roll_2;
    if (total == 10 || roll_1 == "Spare") {
      this.frames.push("Spare");
    } else if (roll_1 == "Strike" || roll_1 == 10) {
      this.frames.push("Strike");
    } else {
      this.frames.push(total);
    }

    this.calculate(roll_1, roll_2);
  }

  calculate(roll_1, roll_2) {
    let result = [];
    let strikes = 0;
    let spares = 0;
    this.frames.map((frame) => {
      if (frame == "Strike") {
        strikes += 10;
        result.push(frame);
      } else if (frame == "Spare") {
        spares += 10;
        result.push(frame);
      } else if (spares > 0) {
        result.push(roll_1 * 2 + roll_2 + spares);
        spares = 0;
      } else if (strikes > 0) {
        result.push((roll_1 + roll_2) * 2 + strikes);
        strikes = 0;
      } else {
        result.push(frame);
      }
    });
    this.frames = result;
  }
}
