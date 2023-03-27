const Frame = require('./frame')

describe('Frame', () => {
  let frame;

  beforeEach(() => {
    frame = new Frame();
  });

  it('initializes a frame', () => {
    expect(frame.rolls).toEqual([]);
  });

  it('adds roll points to the frame', () => {
    frame.addRollPoints(4)
    expect(frame.rolls).toEqual([4])
    frame.addRollPoints(5)
    expect(frame.rolls).toEqual([4, 5])
    frame.addRollPoints(6)
    expect(() => {
      frame.addRollPoints(6);
    }).toThrowError("max rolls exceeded");
  });

  it('returns a total score for the frame', () => {
    frame.addRollPoints(4)
    frame.addRollPoints(3)
    expect(frame.totalScore()).toEqual(7)
  });

  describe('isStrike', () => {
    it('indicates if strike', () => {
      frame.addRollPoints(10);
      expect(frame.isStrike()).toBe(true)
    });

    it('tests the isStrike function when its a spare', () => {
      frame.addRollPoints(3);
      frame.addRollPoints(7);
      expect(frame.isStrike()).toBe(false)
    });

    it('tests the isStrike function when its a spare - 10 points on 2nd roll', () => {
      frame.addRollPoints(0);
      frame.addRollPoints(10);
      expect(frame.isStrike()).toBe(false)
    });
  });

  describe('isSpare', () => {
    it('indicates if a spare - 10 points scored accross two rolls', () => {
      frame.addRollPoints(4);
      frame.addRollPoints(6);
      expect(frame.isSpare()).toBe(true)
    });

    it('indicates if a spare - 10 points scored on the second roll', () => {
      frame.addRollPoints(0);
      frame.addRollPoints(10);
      expect(frame.isSpare()).toBe(true)
    });

    it('tests the spare function when its a strike', () => {
      frame.addRollPoints(10);
      frame.addRollPoints(0);
      expect(frame.isSpare()).toBe(false)
    });
  });

  describe('isComplete', () => {
    it('is complete after the first roll when its a strike', () => {
      frame.addRollPoints(10);
      expect(frame.isComplete()).toBe(true);
    });

    it('is complete by the end of two rolls if not a strike', () => {
      frame.addRollPoints(2);
      expect(frame.isComplete()).toBe(false);
      frame.addRollPoints(3);
      expect(frame.isComplete()).toBe(true);
    });
  });
})


