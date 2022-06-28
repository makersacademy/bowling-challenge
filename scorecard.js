class Scorecard {


  add_score(frame) {
    return this.frame_total(frame[0], frame[1])
  }

  frame_total(roll1, roll2) {
    return roll1 + roll2;
  }
}


module.exports = Scorecard;