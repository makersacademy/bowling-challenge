class Test {
  constructor(){
    this.frameNumber = 1;
    this.frameScore = 0;
    this.frameRolls = [];
    this.MAX_NORMAL_FRAME = 2;
    this.PINS = 10;
    this.VALID_INPUTS = [0,1,2,3,4,5,6,7,8,9,'X','/']
  }

  enterPins(number) {

    if (this.VALID_INPUTS.includes(number) === false) {
      return ('incorrect input')
    } else if (this.isOpen() === false) {
      return ('frame closed')
    } else if (this.frameRolls.length === 1 && number === 'X') {
        return ('second roll cannot be a strike')
    } else if (number === 'X') {
      this.frameRolls.push(number)
    } else if (number === '/' && this.frameRolls.length === 0) {
      return ('first roll cannot be a spare')
    } else if (number >= this.PINS) {
      return ('max score 9 or spare')
    } else {
      this.frameRolls.push(number)
      this.frameScore += number;
      this.PINS -= number;
    }
  }

  getScore() {
    if (this.strike()) {
      return 0
    }
    return this.frameScore
  }

  hasStrike() {
    var strikeTest = this.frameRolls.includes('X')
    return strikeTest
  }

  hasSpare() {
    var spareTest = this.frameRolls.includes('/')
    return spareTest
  }

  isOpen() {
    if (this.frameRolls.length === this.MAX_NORMAL_FRAME) {
      return false
    }
    if (this.hasStrike()) {
      return false
    }
  }
}
