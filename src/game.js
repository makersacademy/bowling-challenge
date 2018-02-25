var Game = function() {
  this.scoreCard = [];
  this.frame = [];
  this.result = 0;
};

Game.prototype = {

  roll: function(pins) {
    this.scoreCard.push(pins); 
  }, 

  score: function() {
    var rollNumber = 0;
    // Iterate through 10 frames and add one to frame number
    for (var frameNumber = 0; frameNumber < 10; frameNumber++){
      // If 10 points scored in roll 1 + roll 2 (a spare), the score is going to be 10 + the result of the first roll of the next frame
      if (this.scoreCard[rollNumber] + this.scoreCard[rollNumber +1] === 10) {
        this.result += this.scoreCard[rollNumber] + this.scoreCard[rollNumber +1] + this.scoreCard[rollNumber +2];
      // If the result of roll 1 + 2 is less than 10, then simply add the two together
      } else {
      this.result += this.scoreCard[rollNumber] + this.scoreCard[rollNumber +1];
    }
    rollNumber += 2;
  }
  return this.result;  
}
};

