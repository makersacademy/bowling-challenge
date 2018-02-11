const FrameHistory = require('../src/FrameHistory');

describe('FrameHistory', () => {
  let frameHistory;

  beforeEach(() => {
    frameHistory = new FrameHistory();
  });

  describe('initially', () => {
    it('should not have any frames stored in it', () => {
      expect(frameHistory.size).toEqual(0);
    });

    it('has a head that does not point to anything', () => {
      expect(frameHistory.head).toEqual(null);
    });
  });
});
