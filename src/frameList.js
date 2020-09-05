class FrameList {
  constructor() {
    this.frames = [];
  }

  add(roll_1, roll_2) {
    let total = roll_1 + roll_2;
    if (total == 10) {
      this.frames.push("Spare");
    } else {
      this.frames.push(total);
    }
  }
}
