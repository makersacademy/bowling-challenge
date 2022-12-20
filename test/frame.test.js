const Frame = require('../lib/frame');

describe(Frame, () => {
  let frame;

  beforeEach(() => {
    frame = new Frame();
  });

  describe('Initialized frame', () => {
    it('has a score of 0, an empty roll array and an active status', () => {
      expect(frame.getScore()).toEqual(0);
      expect(frame.getRolls()).toEqual([]);
      expect(frame.getStatus()).toEqual('active');
    });
  });
  
  describe('One roll', () => {
    it('adds a roll of 5', () => {
      frame.addRoll(5);
      expect(frame.getScore()).toEqual(5);
      expect(frame.getRolls()).toEqual([5]);
      expect(frame.getStatus()).toEqual('active');
    });

    it('detects a strike', () => {
      frame.addRoll(10);
      expect(frame.getScore()).toEqual(10);
      expect(frame.getRolls()).toEqual([10]);
      expect(frame.getStatus()).toEqual('strike');
    });

    it('throws error when adding a roll not between 0 and 10', () => {
      expect(() => frame.addRoll(-1)).toThrow('A roll must be between 0 and 10');
      expect(() => frame.addRoll(15)).toThrow('A roll must be between 0 and 10');

      expect(frame.getRolls()).toEqual([]);
    });

    it("throws error if the roll isn't an integer", () => {
      expect(() => frame.addRoll('Hello world'))
        .toThrow('A roll must be an integer');
      expect(() => frame.addRoll(1.5))
        .toThrow('A roll must be an integer');
      expect(frame.getRolls()).toEqual([]);

      expect(() => frame.addRoll(1.0)).not.toThrow();
      expect(frame.getRolls()).toStrictEqual([1])
      expect(frame.getScore()).toBe(1)
    });
  });

  describe('Two rolls', () => {
    it('adds a roll of 5 and a roll of 4', () => {
      frame.addRoll(5);
      frame.addRoll(4);
      expect(frame.getRolls()).toEqual([5,4]);
      expect(frame.getScore()).toEqual(9);
      expect(frame.getStatus()).toEqual('completed');
    });
    
    it('detects a spare', () => {
      frame.addRoll(7);
      frame.addRoll(3);
      expect(frame.getRolls()).toEqual([7,3]);
      expect(frame.getScore()).toEqual(10);
      expect(frame.getStatus()).toEqual('spare');
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
      expect(frame.getStatus()).toEqual('strike');
      expect(() => frame.addRoll()).toThrow('Cannot add rolls to this frame');

      frame = new Frame();
      frame.addRoll(1);
      frame.addRoll(9);
      expect(frame.getStatus()).toEqual('spare');
      expect(() => frame.addRoll()).toThrow('Cannot add rolls to this frame');
    });
  });

  describe('Format method', () => {
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
});