'use strict';
class Player {
   
  constructor() {
   this.rolls = [];
  }

  throw(pins) {
   this.rolls.push(pins);
  }
  
   Score() {
      let rollIndex = 0;
      let score = 0;
      let player = this;

      for (var frameIndex = 0; frameIndex < 10; frameIndex++) {
         if (isSpare()) {
           score += spareScore() 
           rollIndex += 2
         } else if (isStrike()) {
           score += strikeScore()
           rollIndex += 1
         } else {
           score += regularScore()
           rollIndex += 2
         }
         
      }
      return score

      function isSpare() {
        return player.rolls[rollIndex] + player.rolls[rollIndex + 1] == 10;
      }
      function spareScore() {
         return player.rolls[rollIndex] + player.rolls[rollIndex + 1] + player.rolls[rollIndex + 2]
      }

      function isStrike() {
        return player.rolls[rollIndex] == 10; 
      }
      function strikeScore() {
         return player.rolls[rollIndex] + player.rolls[rollIndex + 1] + player.rolls[rollIndex + 2]
      }

      function regularScore() {
        return player.rolls[rollIndex] + player.rolls[rollIndex + 1]
      }

    }

}