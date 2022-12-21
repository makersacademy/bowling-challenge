const Frame = require('../lib/frame');

describe(Frame, () => {
  let frame;

  beforeEach(() => {
    frame = new Frame();
  });

  describe('Initialized frame', () => {
    it('has a score of 0, an empty roll array and an active status', () => {
      expect(frame.score).toEqual(0);
      expect(frame.rolls).toEqual([]);
      expect(frame.status).toEqual('active');
    });
  });
  
  describe('One roll', () => {
    it('adds a roll of 5', () => {
      frame.addRoll(5);
      expect(frame.score).toEqual(5);
      expect(frame.rolls).toEqual([5]);
      expect(frame.status).toEqual('active');
    });

    it('detects a strike', () => {
      frame.addRoll(10);
      expect(frame.score).toEqual(10);
      expect(frame.rolls).toEqual([10]);
      expect(frame.status).toEqual('strike');
    });

    it('throws error when adding a roll not between 0 and 10', () => {
      expect(() => frame.addRoll(-1)).toThrow('A roll must be between 0 and 10');
      expect(() => frame.addRoll(15)).toThrow('A roll must be between 0 and 10');

      expect(frame.rolls).toEqual([]);
    });

    it("throws error if the roll isn't an integer", () => {
      expect(() => frame.addRoll('Hello world'))
        .toThrow('A roll must be an integer');
      expect(() => frame.addRoll(1.5))
        .toThrow('A roll must be an integer');
      expect(frame.rolls).toEqual([]);

      expect(() => frame.addRoll(1.0)).not.toThrow();
      expect(frame.rolls).toStrictEqual([1])
      expect(frame.score).toBe(1)
    });
  });

  describe('Two rolls', () => {
    it('adds a roll of 5 and a roll of 4', () => {
      frame.addRoll(5);
      frame.addRoll(4);
      expect(frame.rolls).toEqual([5,4]);
      expect(frame.score).toEqual(9);
      expect(frame.status).toEqual('completed');
    });
    
    it('detects a spare', () => {
      frame.addRoll(7);
      frame.addRoll(3);
      expect(frame.rolls).toEqual([7,3]);
      expect(frame.score).toEqual(10);
      expect(frame.status).toEqual('spare');
    });
    
    it('throws error if rolls add up to more than 10', () => {
      frame.addRoll(7);
      expect(() => frame.addRoll(7))
        .toThrow('Rolls cannot add up to more than 10');
    });
  });

  describe('Three rolls', () => {
    it('throws error', () => {
      frame.addRoll(4);
      frame.addRoll(4);
      expect(() => frame.addRoll(4))
        .toThrow('Cannot add rolls to this frame');
    });
  });

  describe("Add roll when status isn't active", () => {
    it('throws error', () => {
      frame.addRoll(10);
      expect(frame.status).toEqual('strike');
      expect(() => frame.addRoll(0)).toThrow('Cannot add rolls to this frame');

      frame = new Frame();
      frame.addRoll(1);
      frame.addRoll(9);
      expect(frame.status).toEqual('spare');
      expect(() => frame.addRoll(0)).toThrow('Cannot add rolls to this frame');
    });
  });

  describe('format method', () => {
    it('initialized frame', () => {
      expect(frame.format()).toEqual("     ");
    });

    it('one roll', () => {
      frame.addRoll(5);
      expect(frame.format()).toEqual('5    ');
    });

    it('two rolls', () => {
      frame.addRoll(5);
      frame.addRoll(4);
      expect(frame.format()).toEqual('5 , 4');
    });

    it('strike', () => {
      frame.addRoll(10);
      expect(frame.format()).toEqual('    X');
    });

    it('spare', () => {
      frame.addRoll(7);
      frame.addRoll(3);
      expect(frame.format()).toEqual('7 , /');
    });
  });

  describe('addBonus method', () => {
    it("throws if roll isn't an integer between 0 and 10", () => {
      frame.addRoll(10);
      
      expect(() => frame.addBonus(-1))
        .toThrow('A roll must be between 0 and 10');
      expect(() => frame.addBonus(15))
        .toThrow('A roll must be between 0 and 10');

      expect(() => frame.addBonus('Hello world'))
        .toThrow('A roll must be an integer');
      expect(() => frame.addBonus(1.5))
        .toThrow('A roll must be an integer');
      
      expect(frame.score).toEqual(10);

      expect(() => frame.addBonus(1.0)).not.toThrow();
    });

    it("does nothing if status isn't strike or spare", () => {
      frame.addBonus(5);
      expect(frame.score).toBe(0);

      frame.addRoll(3);
      frame.addRoll(2);
      frame.addBonus(7);
      expect(frame.score).toBe(5)
    });

    it('adds two bonuses if we rolled a strike', () => {
      frame.addRoll(10);
      expect(frame.score).toBe(10);
      expect(frame.status).toEqual('strike');

      frame.addBonus(5);
      expect(frame.score).toBe(15);

      frame.addBonus(2);
      expect(frame.score).toBe(17);
      expect(frame.status).toEqual('completed');

      frame.addBonus(7);
      expect(frame.score).toBe(17);
    });

    it('adds one bonus if we rolled a spare', () => {
      frame.addRoll(5);
      frame.addRoll(5);
      expect(frame.score).toBe(10);
      expect(frame.status).toEqual('spare');

      frame.addBonus(3);
      expect(frame.score).toBe(13);
      expect(frame.status).toEqual('completed');
      
      frame.addBonus(7);
      expect(frame.score).toBe(13);
    });
  });
});
