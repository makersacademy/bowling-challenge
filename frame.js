class Frame {
  constructor(roll1, roll2) { 
    if (roll1 > 10 || roll1 + roll2 > 10) {
      throw new Error("invalid points");
    }

    this.roll1 = roll1;
    this.roll2 = roll2;
  }

  getRoll1() {
    return this.roll1;
  }

  basePoints() {
    return this.roll1 + this.roll2;
  }

  bonusPoints(nextFrame) {
    let points = 0;

    if (this.roll1 === 10) {
      points += nextFrame.basePoints();
    } else if (this.roll1 + this.roll2 === 10) {
      points += nextFrame.getRoll1();
    }

    return points;
  }

}

// try {
//   const frame1 = new Frame(8, 2); // This will work
//   const frame2 = new Frame(10, 1); // This will throw an error
// } catch (error) {
//   console.error(error.message); // Output: "Invalid points"
// }


module.exports = Frame;