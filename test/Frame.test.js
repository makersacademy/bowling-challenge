const Frame = require('../app/Frame');

beforeEach( () => {
  frame = new Frame();
});

describe('Frame class', () => {
  describe('frame attributes at start of game', () => {
    it('to be default starting values', () => {
      expect(frame.score).toEqual(0);
      expect(frame.scoreThrow1).toEqual(0);
      expect(frame.scoreThrow2).toEqual(0);
      expect(frame.scoreThrow3).toEqual(0);
      expect(frame.bonus).toEqual('TBC');
    });
  });
  
  describe('frame attributes during game', () => {
    it('can be updated', () => {
      frame.score = 1;
      expect(frame.score).toEqual(1);
      frame.scoreThrow1 = 2;
      expect(frame.scoreThrow1).toEqual(2);
      frame.scoreThrow2 = 3;
      expect(frame.scoreThrow2).toEqual(3);
      frame.scoreThrow3 = 4;
      expect(frame.scoreThrow3).toEqual(4);
      frame.bonus = 'strike';
      expect(frame.bonus).toEqual('strike');
    });
  });
});
