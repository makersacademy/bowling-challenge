class ScoreBoard {

  constructor(dict, array) {
    this.rollOne = this._zeroToDash(dict[1]);
    this.rollTwo = this._zeroToDash(dict[2]);
    this.scoreArray = array;
  }

  _zeroToDash(num) {
    if (num === 0) {
      return "-"
    } else {
      return num
    }
  }

  displayRolls() {
    if (this.rollOne === 10) {
      return 'X'
    } else if (this.rollOne + this.rollTwo === 10) {
      return `${this.rollOne}   /`
    } else {
      return `${this.rollOne}   ${this.rollTwo}`
    }
  }

  displayScores() {
    return this.scoreArray.map(element => {
      if (
        Array.isArray(element) ||
        element === 'spare_tbd'
      ) {
        return '   '
      } else {
        return element
      }
    })
  }

  runningTotal() {
    const array = this.scoreArray.filter(a => Number.isInteger(a))
    return array.reduce((a, b) => a + b, 0)
  }
  
}