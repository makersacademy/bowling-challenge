class Frame {
  constructor(){
    this.frameNumber = 0;
    this.frameScore = 0;
    this.frameRolls = []; // not sure if we need
  }

  pins(number) {
    if (this.frameRolls.length === 2) {
      throw new Error('Two rolls only!');
    }
    this.frameScore += number;
    this.frameRolls.push(number)
  }


  getScore() {
    if (this.strike()) {
      return 0
    }
    return this.frameScore
  }

  strike() {
    var strikeTest = this.frameRolls.includes('X')
    return strikeTest
  }
}
