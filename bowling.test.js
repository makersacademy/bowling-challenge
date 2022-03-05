
const BowlingCard = require('./bowling');

describe(BowlingCard, () => {
  describe('getScore', () => {
    let bowlingCard = new BowlingCard
    it('should have the default score as 0', () => {
      expect(bowlingCard.getScore()).toBe(0)
    });
  });

  describe('roll', () => {
    let bowlingCard = new BowlingCard
    it('should add the score to the scorecard', () => {
      bowlingCard.roll(5)
      expect(bowlingCard.getScore()).toBe(5)
    });
  });
  
});



// A bowling game consists of 10 frames in which 
// the player tries to knock down the 10 pins. 

// In every frame the player can roll one or two times. 

// The actual number depends on strikes and spares. 

// The score of a frame is the number of knocked down pins plus 
// bonuses for strikes and spares. 

// After every frame the 10 pins are reset.