class Game {
  constructor(frameClass = Frame) {
    this.frameClass = frameClass
    this.frames = [];
    this.outputArray = [];
    this.MAX_NUMBER_FRAMES = 10;
  }

  isNew() {
    return this.frames.length === 0;
  }

  addFrame(score) {
    this.frames.push(new this.frameClass(score))
  }

  addRoll(score) {
    this.currentFrame().addRoll(score)
  }

  currentFrame() {
    return this.frames[this.frames.length - 1]
  }

  notFrameTen() {
    return this.frames.length != this.MAX_NUMBER_FRAMES;
  }

  addSpareBonuses() {
    this.frames.forEach((frame, index) => {
      if(frame.isSpare()){
        frame.addBonus(this.frames[index + 1].firstRoll())
      }
    });
  }

  addStrikeBonuses() {
    this.frames.forEach((frame, index) => {
      if(frame.isStrike()) {
        frame.addBonus(this.frames[index + 1].firstRoll())
        if(this.frames[index + 1].isStrike()) {
          frame.addBonus(this.frames[index + 2].firstRoll())
        }
        else {
          frame.addBonus(this.frames[index + 1].secondRoll())
        }
      }
    });
  }

  cumulative() {
    this.frames.forEach((frame, index) => {
      if(index === 0){
        this.outputArray.push(frame.totalScore())
      }
      else {
        this.outputArray.push(this.outputArray[index - 1 ] + frame.totalScore())
      }
    });

    return this.outputArray
  }

};
