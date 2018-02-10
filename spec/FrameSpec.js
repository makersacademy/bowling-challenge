const Frame = require('../src/Frame');

describe('Frame', () => {
  let frame;

  beforeEach(() => {
    frame = new Frame();
  });

  describe('#bowl', () => {
    describe('guard conditions for rules', () => {
      it('cannot record more bowls than the max frame length', () => {
        for (let i = 0; i < frame.maxFrameLength; i += 1) {
          frame.bowl(0);
        }

        expect(() => { frame.bowl(0); }).toThrowError(`Cannot have more than ${frame.maxFrameLength}`);
      });
    });

    describe('basic scoring', () => {
      beforeEach(() => {
        frame.bowl(5);
        frame.bowl(4);
      });

      it('records two rolls', () => {
        expect(frame.rolls).toEqual({ 1: 5, 2: 4 });
      });

      it('knows how many bowl attempts have been made', () => {
        expect(frame.bowlAttempts).toEqual(2);
      });
    });

    describe('scoring a spare', () => {
      it('it records a spare', () => {
        frame.bowl(5);
        frame.bowl(5);

        expect(frame.wasSpare).toBe(true);
      });
    });
  });
});
