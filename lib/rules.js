class Rules {
  constructor(maxFrames = 10) {
    this.maxFrames = maxFrames;
  }

  isStrike = (frame) => frame.some((num) => num === 10);

  isSpare = (frame) => {
    const sum = frame.reduce((accumulator, current) => {
      return accumulator + current;
    }, 0);
    return sum === 10;
  };
}

module.exports = Rules;
