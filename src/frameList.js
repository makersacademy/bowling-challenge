class FrameList {
  constructor() {
    this.frames = {};
    this.rounds = 1;
    this.displayFrames = [];
  }

  add(roll_1, roll_2) {
    let total = roll_1 + roll_2;
    if (total == 10 || roll_1 == "Spare") {
      this.frames[[this.rounds]] = "Spare";
      this.rounds++;
    } else if (roll_1 == "Strike" || roll_1 == 10) {
      this.frames[[this.rounds]] = "Strike";
      this.rounds++;
    } else {
      this.frames[[this.rounds]] = total;
      this.rounds++;
    }

    this.calculate(roll_1, roll_2);
  }

  calculate(roll_1, roll_2) {
    let bonus = 0;
    let displayFrames = [];

    for (const [key, value] of Object.entries(this.frames)) {
      if (value === "Strike" || value === "Spare") {
        displayFrames.push(value);
        bonus += 10;
      } else if (this.frames[key - 1] == "Strike") {
        displayFrames.push((roll_1 + roll_2) * 2 + bonus);
        this.bonus = 0;
      } else if (this.frames[key - 1] == "Spare") {
        displayFrames.push(roll_1 * 2 + roll_2 + bonus);
        this.bonus = 0;
      }
    }

    this.displayFrames = displayFrames;
  }
}
