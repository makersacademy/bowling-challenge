const Frame = require('../lib/frame');

describe(Frame, () => {
  describe('Initialized frame', () => {
    it('has a score of 0, an empty roll array and an active status', () => {
      const frame = new Frame();

      expect(frame.getScore()).toEqual(0);
      expect(frame.getRolls()).toEqual([]);
      expect(frame.getStatus()).toEqual("active");
    });
  });
  
  describe('One roll', () => {
    it('adds a roll of 5', () => {
      const frame = new Frame();

      frame.addRoll(5);
      expect(frame.score).toEqual(5);
      expect(frame.getRolls()).toEqual([5]);
    });

    it('raises error when adding a roll not between 0 and 10', () => {
      const frame = new Frame();

      expect(() => frame.addRoll(-1)).toThrow('A roll must be between 0 and 10');
      expect(() => frame.addRoll(15)).toThrow('A roll must be between 0 and 10');

      expect(frame.rolls).toEqual([]);
    });

    it("raises error if the roll isn't an integer", () => {
      const frame = new Frame();

      expect(() => frame.addRoll('Hello world'))
        .toThrow('A roll must be an integer');
      expect(() => frame.addRoll(1.5))
        .toThrow('A roll must be an integer');
      expect(frame.rolls).toEqual([]);

      expect(() => frame.addRoll(1.0))
        .not.toThrow();
      expect(frame.rolls).toStrictEqual([1])
      expect(frame.score).toBe(1)
    });
  });
});