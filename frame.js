class Frame {
  constructor() {
    this.frame = []
  }

  add(n) {
    this.frame.push(n)
  }

  isStrike() { 
    return (this.frame[0] === 10 ? true : false);
  }

  isSpare() { 
    return (this.frame[0] + this.frame[1] === 10 ? true : false); 
  }

  printFrame() {
    return this.frame;
  }

}

module.exports = Frame;