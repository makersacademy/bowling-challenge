const Frame = require('./frame')

frame = require('./frame')

class scoreboard {
  constructor() {
    this.scoreboard = []
    this.total_frames_count = 0
  }

  add_frame(frame) {
    this.scoreboard.push(frame)
    this.total_frames_count++
  }

  total() {
    console.log(this.scoreboard);
    let total = 0
    let index = 0
    let bonus_roll_1 = 0
    let bonus_roll_2 = 0

    this.scoreboard.forEach(frame => {
      index++
      if (frame.frame.includes('spare')) {
        let spare_index = index + 1
        let next_roll = this.scoreboard[spare_index]
        if (index >= 9){
          bonus_roll_1 = 5
        } else {
          bonus_roll_1 = next_roll.frame[0]
        }
      }
      else if (frame.frame.includes('strike')) {
        let strike_index_1 = index + 1
        let strike_index_2 = index + 2
        let next_roll_1 = this.scoreboard[strike_index_1]
        let next_roll_2 = this.scoreboard[strike_index_2]
        if (index >=9) {
          bonus_roll_1 = 5
          bonus_roll_2 = 5
        }
        else {
          bonus_roll_1 = next_roll_1.frame[0]
          bonus_roll_2 = next_roll_1.frame[1]
          // bonus_roll_2 = next_roll_2.frame[0]
        }
      }
    });

    this.scoreboard.forEach(frame => {
      total += frame.frame[0]
      total += frame.frame[1]
      total += bonus_roll_1
      total += bonus_roll_2
    })
    return total
  }

  total_frames() {
    return this.total_frames_count
  }
}

module.exports = scoreboard
