class Bowling {
  constructor() {
    this.score = 0;
    this.current_frame = 1;
    this.bonus_roll = 0;
  }

  process_frame (rolls) {
    if (this.current_frame > 10) {
      throw `Game over`;
    }

    //Calculates roll score
    rolls.forEach((roll) => {
    this.score += roll;
    });
    
    //Calculates num of consecutive strikes
    this.bonus_roll =
    (rolls[0] === 10) ? 2 :
    (rolls[0] + rolls[1] === 10) ? 1 : 0;
    
    //Apply bonus from previous roll
    //   if (this.bonus_roll > 0) {
    //     this.score += roll * multiplier;
    //     this.bonus_roll -= 1;
    //   }  
    // }
    //Update bonus for next roll
    // this.bonus_roll = 
    //   if (rolls[0] === 10) {
    //     return 2;
    //   } else if (rolls[0] + rolls[1] == 10) {
    //     return 1;
    //   } else {
    //     return 0;
    //   }
    this.current_frame += 1;
  }

  report_score () {
    if (this.score === 0) {
      return `Game over, you scored 0 points.`;
    } else if (this.score === 300) {
      return `Congratulations on your perfect game! You scored 300 points!`;
    } else {
      return `You scored ${this.score} points!`;
    }
  }
}

module.exports = Bowling;

//#1 on terminal, enter node and require the file:
//Bowling = require('./bowling');
// output: [class Bowling]
//bowling = new Bowling();
// output: Bowling { score: 0, current_frame: 1, bonus_roll: 0 }
// bowling.process_frame([1, 4]);
// bowling.process_frame([4, 5]);
// bowling.process_frame([6, 4]);
// bowling.process_frame([5, 5]);
// bowling.process_frame([10, 0]);
// bowling.process_frame([0, 1]);
// bowling.process_frame([7, 3]);
// bowling.process_frame([6, 4]);
// bowling.process_frame([10, 0]);
// bowling.process_frame([2, 8, 6]);