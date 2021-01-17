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

    strikeIdentifier(roll_1) {
      if(roll_1 === 10) {
        this.strike = true
      }
      else {
        this.strike = false
      }
    };

    spareIdentifier(roll_1, roll_2) {
      if(roll_1 + roll_2 === 10) {
        this.spare = true
      }
      else {
        this.spare = false
      }
    };

    playAFrame(roll_1, roll_2) {
      if(roll_1 === 10) {
        roll_2 = 0    
      }

      var frameScore = this.calculateFrameScore(roll_1, roll_2)
      this.totalScore += frameScore
      
      this.strikeIdentifier(roll_1)
      this.spareIdentifier(roll_1, roll_2)
    //   extraBonusRound
    };
};


// def play_a_frame
//     puts 'What is your first roll?'
//     roll_1 = gets.chomp.to_i
//     if roll_1 == 10
//        roll_2 = 0
//     else 
//       puts 'What is your second roll?'
//       roll_2 = gets.chomp.to_i
//     end
//     frame_score = calculate_frame_score(roll_1, roll_2)
//     @total_score += frame_score
    
//     puts "Your current score is #{@total_score}, not counting any coming bonus!"

//     strike?(roll_1)
//     spare?(roll_1, roll_2)
//     extra_bonus_round?
//   end
