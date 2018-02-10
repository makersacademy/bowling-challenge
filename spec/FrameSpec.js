const Frame = require('../src/Frame');

describe('Frame', () => {
  let frame;

  beforeEach(() => {
    frame = new Frame();
  });

  describe('#recordRoll', () => {
    it('records a single roll', () => {
      frame.recordRoll(5);

      expect(frame.rolls).toEqual(5);
    });
  });
});
