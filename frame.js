class Frame {
  constructor() {
    this.frames = [];
  }

  createNewFrame(rollsArr) {
    
    if (this.frames.length > 0) { 
      if (this.frames[0].rolls.length === 1) { 
        this.frames[0].total += rollsArr.reduce((a, b) => a + b, 0); 
      } else if (this.frames[0].total === 10) {
        this.frames[0].total += rollsArr[0]; 
      }
    }

    this.frames.push({
      rolls: rollsArr,
      total: rollsArr.reduce((a, b) => a + b, 0)
    });
  }

  totalPoints() {
    let result = 0;
    this.frames.forEach((frame) => (result += frame.total));
    return result;
  }
}

module.exports = Frame;
