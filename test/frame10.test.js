const Frame10 = require('../lib/frame10');

describe(Frame10, () => {
  let frame;

  beforeEach(() => {
    frame = new Frame10();
  });

  describe('Two rolls (not a spare)', () => {
    it('completes the frame', () => {
      frame.addRoll(4);
      expect(frame.score).toBe(4);

      frame.addRoll(5);
      expect(frame.score).toBe(9);
      expect(frame.status).toEqual('completed');

      expect(() => frame.addRoll(0)).toThrow('Cannot add rolls to this frame');
    });

    it('throws if the rolls add up to more than 10', () => {
      frame.addRoll(4);
      expect(frame.score).toBe(4);

      expect(() => frame.addRoll(8)).toThrow('Rolls cannot add up to more than 10');
    });
  });

  describe('Roll a strike', () => {
    xit("adds two bonus rolls (that don't add up to more than 10)", () => {
      frame.addRoll(10);
      expect(frame.score).toBe(10);
      expect(frame.rolls).toEqual([10]);
      expect(frame.status).toEqual('bonus');

      frame.addRoll(2);
      expect(frame.score).toBe(12);
      expect(frame.rolls).toEqual([10, 2]);
      expect(frame.status).toEqual('bonus');

      frame.addRoll(7);
      expect(frame.score).toBe(19);
      expect(frame.rolls).toEqual([10, 2, 7]);
      expect(frame.status).toEqual('completed');

      expect(() => frame.addRoll(0)).toThrow('Cannot add rolls to this frame');
    });
  });

  describe('Roll a spare', () => {
    xit('adds one bonus roll', () => {

    });
  });
});
