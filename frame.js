class Frame{

  constructor() {
  this.currentFrame = 1;
  };

  strike(frame) {
    if (frame.length === 1 && frame.reduce((a,b) => a + b, 0) === 10) {
      return true
    }
    return false
  }
}

module.exports = Frame;