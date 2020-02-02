'use strict';

class Bowling {
  constructor(){
  this.total = []
  };

  roll(pins){
    this.total.push(pins);
    // this will insert each pin into an array starting with index 0 to 19

  }

  score(){
    let rollIndex = 0
    //rollindex refers to the position in the array, it will start off with 0 so 1st item in the array
    let totalScore = 0
    //totalscore will be the total score for all the frames
    for (var frameIndex = 0; frameIndex < 10; frameIndex ++) {
      //we will have 10 frames with two rolls each
      if (this.isStrike(rollIndex)) {
        totalScore = totalScore + 10 + this.total[rollIndex + 1] + this.total[rollIndex + 2]
        // if first roll is a 10 then 10 is added to the next item and the one after that since user wouldnt be allowed to have a second roll
        rollIndex ++;
        //this is then saying go to the next roll and continue the for loop going into the else statement next
      } else {
        //this is saying if the first roll is not a 10
        var rollScore = this.total[rollIndex] + this.total[rollIndex + 1]
        //this will add the first roll and second roll to the rollscore of each frame
          if (this.isSpare(rollScore)) {
            //if the first and second roll equal 10
            totalScore = totalScore + rollScore + this.total[rollIndex + 2]
            //then add 10 + the next roll
          } else {
            totalScore += rollScore
            //otherwise just add the 10
          }
      rollIndex += 2
      //this is then saying move on to roll index plus two i.e. from 0index to 2 index
      }
    }
    return totalScore = totalScore || 0
    //we need to return the total score for our tests
  };

  isSpare(rollScore){
    return rollScore === 10;
    }

  isStrike(rollIndex) {
    return this.total[rollIndex] === 10;
  }
};
