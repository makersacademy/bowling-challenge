const Frame = require('../app/Frame');

beforeEach( () => {
  frame = new Frame(1);
});

describe('Frame class', () => {
  describe('frame attributes at start of game', () => {
    it('to be default starting values', () => {
      expect(frame.id).toEqual(1);
      expect(frame.score).toEqual(0);
      expect(frame.scoreThrow1).toEqual(0);
      expect(frame.scoreThrow2).toEqual(0);
      expect(frame.scoreThrow3).toEqual(0);
      expect(frame.spare).toEqual(false);
      expect(frame.strike).toEqual(false);
    });
  });

  describe('#setBonus', () => {
    it('assigns strike as true', () => {
      frame.scoreThrow1 = 10;
      frame.setBonus();
      expect(frame.scoreThrow1).toEqual(10);
      expect(frame.strike).toEqual(true);
    });
    
    it('assigns spare as true', () => {
      frame.scoreThrow1 = 5;
      frame.scoreThrow2 = 5;
      frame.setBonus();
      expect(frame.scoreThrow1).toEqual(5);
      expect(frame.scoreThrow2).toEqual(5);
      expect(frame.spare).toEqual(true);
    });

    it('does not assign strike or spare as true', () => {
      frame.scoreThrow1 = 0;
      frame.scoreThrow2 = 1;
      frame.setBonus();
      expect(frame.scoreThrow1).toEqual(0);
      expect(frame.scoreThrow2).toEqual(1);
      expect(frame.spare).toEqual(false);
      expect(frame.strike).toEqual(false);
    });
  });
});
