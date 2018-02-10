const Frame = require('../src/Frame');

describe('Frame', () => {
  let frame;

  beforeEach(() => {
    frame = new Frame();
  });

  describe('#bowl', () => {
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

      it('cannot record more bowls than the max frame length', () => {
        expect(() => { frame.bowl(1); }).toThrowError(`Cannot have more than ${frame.maxFrameLength}`);
      });
    });
  });
});
