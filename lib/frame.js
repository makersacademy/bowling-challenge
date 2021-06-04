module.exports = class Test {
  constructor () {
    this._pinfall = 0
  }

  roll (pinfall) {
    this._pinfall += pinfall
  }

  get pinfall () {
    return this._pinfall
  }
}
