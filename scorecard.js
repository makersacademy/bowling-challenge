class Scorecard {
  constructor(scores) {
    this.scores = scores;
  }

  frame_total(frame) {
    let total = 0;
    frame.forEach(roll => {
      total += roll;
    });
    return total;
  }

  is_strike(roll) {
    if(roll == 10) {
      return true;
    }
  }

  is_spare(frame) {
    if(frame == 10) {
      return true;
    }
  }


  total_score() {
    let total = 0;
    for (let i = 0; i < this.scores.length; i++) {
      let roll1 = this.scores[i][0] 
      // let nextFrameRoll1 = this.scores

      if(i == 9 && roll1 == 10) {
        total += this.frame_total(this.scores[i]);
      } else if(i == 8 && roll1 == 10) {
        total += this.scores[i + 1][0] + this.scores[i + 1][1] + 10;
      } else if(roll1 == 10 && this.scores[i + 1][0] == 10) {
        if(i < 7) {
          total += this.frame_total(this.scores[i + 2]) + 20;
        } else if(i == 7) {
          total += this.frame_total(this.scores[i + 2]) + 20;
        } else {
          total += this.frame_total(this.scores[i + 1]) + 10;
        }
        
      } else if(this.is_strike(roll1)) {
        total += this.frame_total(this.scores[i + 1]) + 10;
      } else if(this.is_spare(this.frame_total(this.scores[i]))) {
        total += this.frame_total(this.scores[i]) + this.scores[i + 1][0];
      } else {
        total += this.frame_total(this.scores[i]);
      }
      console.log(i, total)
    }
   
    return total;
  }


}


module.exports = Scorecard;