/*jshint esversion: 6 */

describe('Frame',() => {

  beforeEach(() => {
    frame = new Frame();
  });

  describe('default', () => {
    it('is active', () => {
      expect(frame._isActive).toBe(true);
    });
  });

  describe('.knockDown',() => {
    it('adds the score to the current frame',() => {
      frame.knockDown(3);
      expect(frame._score).toEqual(3);
    });

    it('holds one if a spare is scored', () => {
      frame.knockDown(3);
      frame.knockDown(7);
      expect(frame._bonusRollsLeft).toEqual(1);
    });

    it('holds two if a strike is scored', () => {
      frame.knockDown(10);
      expect(frame._bonusRollsLeft).toEqual(2);
    });

    it('sets to inactive if a spare is scored', () => {
      frame.knockDown(2);
      frame.knockDown(8);
      expect(frame._isActive).toBe(false);
    });


    it('sets to inactive if a strike is scored', () => {
      frame.knockDown(10);
      expect(frame._isActive).toBe(false);
    });

    it('sets to inactive once two rolls occur', () => {
      frame.knockDown(4);
      frame.knockDown(1);
      expect(frame._isActive).toBe(false);
    });
  });
});
