'use strict';

class Game {

    constructor() {
       this.totalScore = 0;
       this.spare = false;
       this.strike = false;
       this.currentFrame = 1;
    };

    calculateFrameScore(roll_1, roll_2) {
      if(this.strike === true) {
        return (roll_1 + roll_2) * 2
      }
      else if(this.spare === true) {
        return (roll_1 * 2) + roll_2
      }
      else {
        return roll_1 + roll_2
      }
    };
};


// def calculate_frame_score(roll_1, roll_2)
//     if @strike == true 
//       frame_score = (roll_1 + roll_2) * 2
//     elsif @spare == true
//       frame_score = (roll_1 * 2) + roll_2
//     else
//       frame_score = roll_1 + roll_2
//     end 
//     return frame_score
//   end 