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
      if (this.isStrike()) {
        this.strikeScore()
        this.frm_indx += 1
      } else if (this.isSpare()) {
        this.spareScore()
        this.frm_indx += 2
      } else {
        this.frameScore()
        this.frm_indx += 2
      }
    }
    return this.result
  }
  isSpare(frm_indx) {
    return this.frame[this.frm_indx] + this.frame[this.frm_indx + 1] === 10
  }
  spareScore(frm_indx) {
    this.result += this.frame[this.frm_indx] + this.frame[this.frm_indx + 1] + this.frame[this.frm_indx + 2]
  }
  isStrike(frm_indx) {
    return this.frame[this.frm_indx] === 10
  }
  strikeScore(frm_indx) {
    this.result += 10 + this.frame[this.frm_indx + 1] + this.frame[this.frm_indx + 2]
  }
  frameScore(frm_indx) {
    this.result += this.frame[this.frm_indx] + this.frame[this.frm_indx + 1]
  }
}