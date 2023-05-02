class Game {
  constructor(frameClass) {
    this.grandTotal = 0;
    this.frames = [];
    for(let i = 0; i < 10; i++) {
      let frame = new frameClass();
      this.frames.push(frame);
    };
  };

  play(scoresArray) { // take a 2D array, 1 array for each frame. If strike, array length will be 1
    this.frames[0].playFrame(scoresArray[0]);
    // no bonus points to allocate after first frame
    for (let i = 1; i < 10; i++) {
      this.frames[i].playFrame(scoresArray[i]);
      this.allocateBonusPoints(i);
    }
    if (this.frames[9].isStrike() || this.frames[9].isSpare()) {
      // Bonus rolls after the final frame provided from UI as addl array element
      this.playFinalFrameBonusRolls(scoresArray[10]);
    }
    this.calculateGrandTotal();
  };
  
  allocateBonusPoints(index) {
    if (this.frames[index-1].isSpare()) {
      this.frames[index-1].bonusPoints += this.frames[index].rolls[0]; 
    } else if (this.frames[index-1].isStrike()) {
      this.frames[index-1].bonusPoints += this.frames[index].regularPoints;
      // if this is at least the 3rd frame & have been 2 consecutive strikes before this frame
      if (index >= 2 && this.frames[index-2].isStrike()) {
        this.frames[index-2].bonusPoints += this.frames[index].rolls[0]
      };
    };
  };

  playFinalFrameBonusRolls(bonusRollsArray) {
    bonusRollsArray.forEach((points) => {
      this.frames[9].bonusPoints += points;
    });
    // If player had a strike in frame 9 and 10, allocate the first bonus roll as bonus point to frame 9:
    if (this.frames[9].isStrike() && this.frames[8].isStrike()) {
      this.frames[8].bonusPoints += bonusRollsArray[0];
    };
  };
  
  calculateGrandTotal() {
    this.frames.forEach((frame) => {
      this.grandTotal += (frame.regularPoints + frame.bonusPoints);
    });
  };

  isGutterGame() {
    return this.grandTotal == 0;
  };

  isPerfectGame() {
    return this.grandTotal == 300;
  };
};

module.exports = Game;
