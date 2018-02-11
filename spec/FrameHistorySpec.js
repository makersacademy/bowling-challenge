const FrameHistory = require('../src/FrameHistory');

describe('FrameHistory', () => {
  let frameHistory;
  let frameObject;

  beforeEach(() => {
    frameHistory = new FrameHistory();
    frameObject = 'frame';
  });

  describe('initially', () => {
    it('should not have any frames stored in it', () => {
      expect(frameHistory.size).toEqual(0);
    });

    it('has a first object that does not point to anything', () => {
      expect(frameHistory.first).toEqual(null);
    });
  });

  describe('#add', () => {
    describe('when the history is empty', () => {
      it('sets the first object to whatever is passed in', () => {
        frameHistory.add(frameObject);

        expect(frameHistory.first).toEqual(frameObject);
      });
    });
  });
});
