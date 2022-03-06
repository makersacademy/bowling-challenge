class Frame{

  constructor() {
  this.currentFrame = 1;
  this.framePins = []
  };

  singleRoll(pins) {
    this.framePins.push(pins)
    if (this.isFrameCompleted(this.framePins) === true) {
      this.startNext()
      if(this.isStrike(this.framePins)) return 'strike'
      if(this.isSpare(this.framePins)) return 'spare'
      return 'other'
    }else 
      return 'incomplete'
    
  };

  isStrike(frame) {
    if (frame.length === 1 && frame.reduce((a,b) => a + b, 0) === 10) {
      return true
    }
    return false
  };

  isSpare(frame) {
    if (frame.length === 2 && frame.reduce((a,b) => a + b, 0) === 10) {
      return true
    }
    return false
  };

  startNext() {
    this.currentFrame += 1
    this.framePins = []
  };

  isFrameCompleted(frame) {
    if(frame.length === 2 || frame.reduce((a,b) => a + b, 0) === 10) {
      return true
    }
    return false
  };
}

module.exports = Frame;