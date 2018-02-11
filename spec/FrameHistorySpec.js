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

    it('has a first object that does not point to anything', () => {
      expect(frameHistory.first).toEqual(null);
    });
  });

  describe('#add', () => {
    describe('when the history is empty', () => {
      beforeEach(() => {
        frameHistory.add('item1');
      });

      it('sets the first object to whatever is passed in', () => {
        expect(frameHistory.first.frameObject).toEqual('item1');
      });

      it('sets the last item to be null', () => {
        expect(frameHistory.first.next).toBe(null);
      });

      it('increments the size', () => {
        frameHistory.add('frame2');

        expect(frameHistory.size).toEqual(2);
      });
    });
  });
});
