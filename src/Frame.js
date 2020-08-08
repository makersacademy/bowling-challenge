class Frame {
  constructor(){
    this.frameNumber = 1;
    this.frameScore = 0;
    this.frameRolls = [];
    this.MAX_NORMAL_FRAME = 2;
    this.MAX_STANDARD_SCORE = 9;
    this.PINS = 10;
  }

  pins(number) {
    var potentialScore = this.frameScore += number;

    if (number != 'X' && number != '/' && isNaN(number)) {
      throw new Error('Incorrect input!');
    }
    else if (this.frameRolls.length === this.MAX_NORMAL_FRAME) {
      this.frameScore = this.frameRolls[0] + this.frameRolls[1];
      throw new Error('Two rolls only!');
    }
    else if (this.frameRolls.length === 0 && number === '/') {
      this.frameScore = this.frameRolls.length;
      throw new Error('First roll cannot be a spare!');
    }
    else if (this.frameRolls.length === 1 && number === 'X') {
      this.frameScore = this.frameRolls[0];
      throw new Error('Second roll cannot be a strike, enter /');
    }
    else if (this.strike()) {
      this.frameRolls.push('X')
      throw new Error('Frame closed!');
    }
    else if (number == '/') {
      this.frameScore = this.frameRolls[0];
      this.frameRolls.push('/')
    }
    else if (number > this.MAX_STANDARD_SCORE) {
      this.frameScore = 0;
      throw new Error('Maximum score is 9 or strike!');
    }
    else if (potentialScore === this.PINS) {
      this.frameScore = this.frameRolls[0];
      this.frameRolls.push('/')
      throw new Error('That was a spare');
    }
    else if (potentialScore > this.MAX_STANDARD_SCORE) {
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

  spare() {
    var spareTest = this.frameRolls.includes('/')
    return spareTest
  }
}
