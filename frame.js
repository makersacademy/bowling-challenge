class Frame {
  constructor() {
    this.frame = []
    // this.bonus = []
  }

  add(n) {
    this.frame.push(n)
  }

  // Maybe add in an addBonus method which will help with the final frame to capture final one (or two) rolls
  // addBonus(n, x) {
  //   this.bonus.push([n, x])
  // }

  isStrike() { 
    return (this.frame[0] === 10 ? true : false);
  }

  isSpare() { 
    return (this.frame[0] + this.frame[1] === 10 ? true : false); 
  }

  printFrame() {
    return this.frame;
  }

  // printBonus() {
  //   return this.bonus;
  // }

}

module.exports = Frame;