const Frame = require('../src/Frame');

describe('Frame', () => {
  let frame;

  beforeEach(() => {
    frame = new Frame();
  });

  describe('#bowl', () => {
    it('records two rolls', () => {
      frame.bowl(5);
      frame.bowl(4);

      expect(frame.rolls).toEqual({ 1: 5, 2: 4 });
    });

    it('knows how many bowl attempts have been made', () => {
      frame.bowl(5);

      expect(frame.bowlAttempts).toEqual(1);
    });

    it('cannot record more bowls than the max frame length', () => {
      frame.bowl(5);
      frame.bowl(4);

      expect(() => { frame.bowl(1); }).toThrowError(`Cannot have more than ${frame.maxFrameLength}`);
    });
  });
});
