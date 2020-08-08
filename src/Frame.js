class Frame {
  constructor(){
    this.frameNumber = 0;
    this.frameScore = 0;
    this.frameRolls = []; // not sure if we need
  }

  pins(number) {
    var potentialScore = this.frameScore += number;

    if (this.frameRolls.length === 2) {
      throw new Error('Two rolls only!');
    }
    else if (this.strike()) {
      throw new Error('Frame closed!');
    }
    else if (number > 9) {
      this.frameScore = 0;
      throw new Error('Maximum score is 9 or strike!');
    }
    else if (potentialScore > 9) {
      this.frameScore = this.frameRolls[0];
      throw new Error('Maximum score is 9 or spare!');
    }
    else {
      this.frameScore = potentialScore;
      this.frameRolls.push(number)
    }
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
