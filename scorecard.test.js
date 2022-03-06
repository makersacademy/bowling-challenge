const Scorecard = require('./scorecard');

describe('scorecard', () => {
  let scorecard;

  beforeEach(() => {
    scorecard = new Scorecard();
  });

  describe('score', () => {
    it('can roll a gutter game', () => {
      rollMany(20, 0);
      expect(scorecard.score()).toEqual(0);
    });

    it('should return 20 for game of all ones', () => {
      rollMany(20, 1);
      expect(scorecard.score()).toEqual(20);
    });

    it('handles a spare with correct bonus', () => {
      scorecard.roll(5); 
      scorecard.roll(5);
      scorecard.roll(1);
      rollMany(17, 0);
      expect(scorecard.score()).toEqual(12);
    });

    it('handles a strike with correct bonus', () => {
      scorecard.roll(10);
      scorecard.roll(1);
      scorecard.roll(1);
      rollMany(17, 0);
      expect(scorecard.score()).toEqual(14);
    });

    it('can return the max score of 300', () => {
      rollMany(1000000, 10);
      expect(scorecard.score()).toEqual(300);
    });
  });


  function rollMany(rolls, pins) {
    for (let i = 0; i < rolls; i++) {
      scorecard.roll(pins);
    }
  };
});