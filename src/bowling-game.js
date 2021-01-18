'use strict';

class Game {

    constructor() {
       this.totalScore = 0;
       this.spare = false;
       this.strike = false;
       this.doubleStrike = false
       this.currentFrame = 1;
    };

    // started to add in a doubleStrike method to deal with multiple strikes in a row and ran out of time

    calculateFrameScore(roll_1, roll_2) {
      if(this.strike === true) {
        return ((roll_1 + roll_2) * 2)
      }
      else if(this.spare === true) {
        return ((roll_1 * 2) + roll_2)
      }
      else {
        return (roll_1 + roll_2)
      }
    };

    strikeIdentifier(roll_1) {
      if(roll_1 === 10 && this.strike === false) {
        this.strike = true
      }
      else if(roll_1 === 10 && this.strike === true) {
        this.strike = false
        this.doubleStrike = true
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
      this.extraBonusRound
    };

    extraBonusRound(roll_1, roll_2) {
      if(this.currentFrame === 10 && this.strike === true) {
        var extraBonusPoints = roll_1 + roll_2
      }
      else if(this.currentFrame === 10 && this.spare === true) {
        var extraBonusPoints = roll_1
      }
      else {
        var extraBonusPoints = 0
      }
      this.totalScore += extraBonusPoints
    }
};

// last bit of ruby code to add:
// def play_a_game
// while @current_frame < 11
//   puts "Frame number: #{@current_frame}"
//   play_a_frame
//   @current_frame += 1
// end
// puts "Game End"
// puts "Total score: #{@total_score}"
// end