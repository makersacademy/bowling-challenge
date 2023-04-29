class Frame {
  // default value of false given to indicate it is not the final frame
  constructor(is_final_frame = false) {
    this.rolls = [];
    this.bonus_points = 0;
    this.is_final_frame = is_final_frame;
  }

  sum_rolls() {
    let sum = 0;
    for(let i = 0; i < this.roll.length; i++) {
      sum += this.rolls[i];
    }
    return sum
  }

  roll(points) {
    if(this.rolls.length == 2) {
      return 'Frame has already been played';
      // check for invalid scores being inputted
    } else if(points < 0 || points > 10 || (this.sum_rolls() + points) > 10) {
      return 'Invalid roll score';
    }
    else {
      this.rolls.push(points);
      // If player bowled a strike on first shot, set the 2nd roll to 0 so that the frame is ended early. 
      if(points == 10 && this.rolls.length == 1) {
        this.rolls.push(0);
      };
    }
     
  }
}
module.exports = Frame;
