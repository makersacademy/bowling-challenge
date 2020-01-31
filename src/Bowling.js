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
      var rollScore = this.total[rollIndex] + this.total[rollIndex + 1]
      //this will add the first roll and second roll to the rollscore of each frame
        if (this.isSpare(rollScore)) {
          totalScore = totalScore + rollScore + this.total[rollIndex + 2]
        } else {
          totalScore += rollScore
        }
      rollIndex += 2
      //each frame, we move the roll index by two so it picks the right elements in the array
    }
    return totalScore
    //we need to return the total score for our tests
  };

  isSpare(rollScore){
    return rollScore === 10;
    }
};
