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
  }
}
