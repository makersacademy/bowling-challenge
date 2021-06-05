module.exports = class Game {
  constructor () {
    this._totalScore = 0
  }

  bowl (pinfall) {
    this._totalScore += pinfall
    return this._totalScore
  }
}
