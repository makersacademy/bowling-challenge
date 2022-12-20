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
    let total = 0

    // console.log(this.scoreboard[0].frame[0]);
    // console.log(this.scoreboard[0].frame[1]);
    // console.log(this.scoreboard[0].roll_3);

    this.scoreboard.forEach(frame => {
      // console.log(frame);
      // console.log(frame.frame[0]);
      // console.log(frame.frame[1]);
      total += frame.frame[0]
      total += frame.frame[1]
    })

    // this.scoreboard.forEach(roll_3 => {
    //   total += roll_3[0]

    // })
    return total

    }

  total_frames() {
    return this.total_frames_count
  }
}



module.exports = scoreboard
