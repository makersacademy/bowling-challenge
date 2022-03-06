
const BowlingCard = require('./bowling');

describe(BowlingCard, () => {
  describe('getScore', () => {
    let bowlingCard = new BowlingCard
    it('should have the default score as 0', () => {
      expect(bowlingCard.getScore()).toBe(0)
    });
  });

  describe('roll', () => {
    
    it('should add the score to the scorecard', () => {
      let bowlingCard = new BowlingCard
      bowlingCard.roll(5)
      expect(bowlingCard.getScore()).toBe(5)
    });

      it('should add to the frame', () => {
        let bowlingCard = new BowlingCard
        bowlingCard.roll(5)
        expect(bowlingCard.getFrame()).toStrictEqual([5])
      });
  });

  describe('getFrame', () => {
    let bowlingCard = new BowlingCard
    it('should return an empty array', () => {
      expect(bowlingCard.getFrame()).toStrictEqual([])
    });
  });

  describe('isSpare', () => {
    it('should return true if it is a spare', () => {
      let bowlingCard = new BowlingCard
      bowlingCard.roll(5)
      bowlingCard.roll(5)
      expect(bowlingCard.isSpare()).toBe(true)
    });
  });

  describe('isStrike', () => {
    it('should return true if it is a strike', () => {
      let bowlingCard = new BowlingCard
      bowlingCard.roll(10)
      expect(bowlingCard.isStrike()).toBe(true)
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