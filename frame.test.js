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
      expect(frame.isStrike()).toEqual(true)
    });

    it('tests the isStrike function when its a spare', () => {
      frame.addRollPoints(3);
      frame.addRollPoints(7);
      expect(frame.isStrike()).toEqual(false)
    });

      it('tests the isStrike function when its a spare - 10 points on 2nd roll', () => {
      frame.addRollPoints(0);
      frame.addRollPoints(10);
      expect(frame.isStrike()).toEqual(false)
    });
  });

  describe('isSpare', () => {
    xit('indicates if a spare', () => {
      frame.addRollPoints(4);
      frame.addRollPoints(6);
      expect(frame.isSpare()).toEqual(true)
    });

    xit('tests the strike function when its a spare', () => {
      frame.addRollPoints(3);
      frame.addRollPoints(7);
      expect(frame.strike()).toEqual(false)
    });

      xit('tests the strike function when its a spare - 10 points on 2nd roll', () => {
      frame.addRollPoints(0);
      frame.addRollPoints(10);
      expect(frame.strike()).toEqual(false)
    });
  });
  
})




