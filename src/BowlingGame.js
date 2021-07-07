class BowlingGame {
  constructor() {
    this.frame = []
    this.result = 0
    this.frm_indx = 0
  }
  roll(pins) {
    return this.frame.push(pins)
  }
  score() {
    for (var i = 1; i <= 10; i++) {
      if (this._isStrike()) {
        this._strikeScore()
        this.frm_indx += 1
      } else if (this._isSpare()) {
        this._spareScore()
        this.frm_indx += 2
      } else {
        this._frameScore()
        this.frm_indx += 2
      }
    }
    return this.result
  }
  // PRIVATE
  // A spare (/) is when you knock down all the pins on your second try.
  _isSpare(frm_indx) {
    return this.frame[this.frm_indx] + this.frame[this.frm_indx + 1] === 10
  }
  _spareScore(frm_indx) {
    this.result += this.frame[this.frm_indx] + this.frame[this.frm_indx + 1] + this.frame[this.frm_indx + 2]
  }
  // A strike(x) is when you knock down all the pins with the ball on your first try.
  _isStrike(frm_indx) {
    return this.frame[this.frm_indx] === 10
  }
  _strikeScore(frm_indx) {
    this.result += 10 + this.frame[this.frm_indx + 1] + this.frame[this.frm_indx + 2]
  }
  _frameScore(frm_indx) {
    this.result += this.frame[this.frm_indx] + this.frame[this.frm_indx + 1]
  }
}