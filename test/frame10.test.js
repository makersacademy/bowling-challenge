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
    describe("Don't roll another strike", () => {
      it("adds two bonus rolls (that don't add up to more than 10)", () => {
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
  
        expect(() => frame.addRoll(0))
          .toThrow('Cannot add rolls to this frame');
      });
  
      it('throws if the two bonus rolls add up to more than 10', () => {
        frame.addRoll(10);
        frame.addRoll(7);
        expect(() => frame.addRoll(7))
          .toThrow('Rolls cannot add up to more than 10');
      });
    });

    describe('Roll another strike', () => {
      it('any valid roll can be added', () => {
        frame.addRoll(10);
        frame.addRoll(10);
        expect(() => frame.addRoll(0)).not.toThrow();
        expect(frame.score).toBe(20);
        expect(frame.rolls).toEqual([10, 10, 0]);

        frame = new Frame10();
        frame.addRoll(10);
        frame.addRoll(10);
        expect(() => frame.addRoll(5)).not.toThrow();
        expect(frame.score).toBe(25);
        expect(frame.rolls).toEqual([10, 10, 5]);

        frame = new Frame10();
        frame.addRoll(10);
        frame.addRoll(10);
        expect(() => frame.addRoll(10)).not.toThrow();
        expect(frame.score).toBe(30);
        expect(frame.rolls).toEqual([10, 10, 10]);
        expect(frame.status).toEqual('completed');

        frame = new Frame10();
        frame.addRoll(10);
        frame.addRoll(10);
        expect(() => frame.addRoll(11))
          .toThrow('A roll must be between 0 and 10');
      });
    });
  });

  describe('Roll a spare', () => {
    it('adds one bonus roll', () => {
      frame.addRoll(0);
      frame.addRoll(10);
      expect(frame.status).toBe('bonus');

      frame.addRoll(10);
      expect(frame.score).toBe(20);
      expect(frame.rolls).toEqual([0, 10, 10]);
      expect(frame.status).toEqual('completed');
    });
  });

  describe('addBonus', () => {
    it('does nothing', () => {
      frame.addRoll(10);
      frame.addBonus(5);
      expect(frame.score).toBe(10);
      expect(frame.status).toEqual('bonus');
    });
  });
});
