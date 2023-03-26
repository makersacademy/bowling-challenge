const MAX_PINS = 10
const MAX_ROUNDS = 10

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
      if ( this.rolls[this.frame] === MAX_PINS ) {
        this.#strike()
        if ( !Number.isNaN(this.score) && this.score != this.round_scores[this.turn] ) {
          this.#add_score_history(this.score)
        }
      }
      else if ( this.rolls[this.frame] + this.rolls[this.frame + 1] === MAX_PINS) {
        this.#spare()
        if ( !Number.isNaN(this.score) && this.score != this.round_scores[this.turn] ) {
          this.#add_score_history(this.score)
        }
      }
      else {
        this.#normal_round()
        if ( !Number.isNaN(this.score) && this.score != this.round_scores[this.turn] ) {
          this.#add_score_history(this.score)
        }
      }
      this.turn += 1

      if ( this.turn === MAX_ROUNDS ) {
        if ( this.rolls[this.frame] < MAX_PINS && this.rolls[this.frame] + this.rolls[this.frame + 1] != MAX_PINS) {
          this.#normal_round()
          this.#add_score_history(this.score)
        }
        else {
          this.score += this.rolls[this.frame] + this.rolls[this.frame + 1] + this.rolls[this.frame + 2]
          this.frame += 3
          this.#add_score_history(this.score)
        }
        break
      }
    }
    return this.score
  }

  //refactors

  #strike () {
    this.score += ( MAX_PINS + this.rolls[this.frame + 1] + this.rolls[this.frame + 2])
    this.frame += 1
  }

  #spare () {
    this.score += ( MAX_PINS + this.rolls[this.frame + 2])
    this.frame += 2
  }

  #normal_round () {
    this.score += this.rolls[this.frame] + this.rolls[this.frame + 1]
    this.frame += 2
  }

  #add_score_history (score) {
    this.round_scores.push(score)
  }

}

module.exports = Bowling;