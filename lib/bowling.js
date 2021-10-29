class Bowling {

  constructor () {
    this.score = 0
  }

  roll (pins) {
    this.score += pins
  }

}

module.exports = Bowling;