class Bowling {

  constructor () {
    this.round_scores = []
    this.rolls = []
  }

  roll (pins) {
    this.rolls.push(pins)
  }

  total_score () {
    this.frame = 0
    this.score = 0
    this.turn = 1
    while ( this.frame < this.rolls.length ) {
      if ( this.rolls[this.frame] === 10 ) {
        this.score += ( 10 + this.rolls[this.frame + 1] + this.rolls[this.frame + 2])
        this.frame += 1
        if ( !Number.isNaN(this.score) && this.score != this.round_scores[this.turn] ) {
          this.round_scores.push(this.score)
        }
      }
      else if ( this.rolls[this.frame] + this.rolls[this.frame + 1] === 10) {
        this.score += ( 10 + this.rolls[this.frame + 2])
        this.frame += 2
        if ( !Number.isNaN(this.score) && this.score != this.round_scores[this.turn] ) {
          this.round_scores.push(this.score)
        }
      }
      else {
        this.score += this.rolls[this.frame] + this.rolls[this.frame + 1]
        this.frame += 2
        if ( !Number.isNaN(this.score) && this.score != this.round_scores[this.turn] ) {
          this.round_scores.push(this.score)
        }
      }
      this.turn += 1

      if ( this.turn === 10 ) {
        if ( this.rolls[this.frame] < 10 && this.rolls[this.frame] + this.rolls[this.frame + 1] != 10) {
          this.score += this.rolls[this.frame] + this.rolls[this.frame + 1]
          this.frame += 2
          this.round_scores.push(this.score)
        }
        else {
          this.score += this.rolls[this.frame] + this.rolls[this.frame + 1] + this.rolls[this.frame + 2]
          this.frame += 3
          this.round_scores.push(this.score)
        }
        break
      }
    }
    return this.score
  }
}

module.exports = Bowling;