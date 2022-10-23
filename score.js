class Score {
  constructor() {
    this.frames = [];
  }

  add(frame) {
    this.frames.push(frame);
  }

  frameScore(index) {
    const currentFrame = this.frames[index - 1];

    if (currentFrame.strike()) {
      return currentFrame.getSum() + this.getStrikeBonus(index);
    }

    else if (currentFrame.spare()) {
      return currentFrame.getSum() + this.getSpareBonus(index);
    }
    else {
    return currentFrame.getSum();
    }
  }
  
  // lastGame() {
  //   if (this.frames.length === 11) {
  //   return this.frames[this.frames.length - 1];
  //   }
  // }

  getStrikeBonus(index) {
    const nextFrame = this.frames[index];
    const thirdFrame = this.frames[index + 1];

    if (nextFrame.strike()) {
      return 10 + thirdFrame.rollOne;
    }
    return nextFrame.getSum(); 
  }
   
  getSpareBonus(index) {
    const nextFrame = this.frames[index];

    return nextFrame.rollOne;
  } 

  getTotalScore() {
    let sum = 0;
    this.frames.forEach((frame, index) => {
      sum += this.frameScore(index+1);
    }) 
    return sum;
  };
};

module.exports = Score;