const Frame = require('../lib/frame');

describe(Frame, () => {

  let frame;

  beforeEach(() => {
    frame = new Frame;
  });

  describe('getFrameScores() (and playFrame(firstScore, secondScore))', () => {
    it('returns the frame score', () => {
      frame.playFrame(5, 4)
      expect(frame.getFrameScores()).toEqual([5, 4]);
    });

    it('returns 10 if player scores a strike', () => {
      frame.playFrame(10, 0);
      expect(frame.getFrameScores()).toEqual([10, 0]);
    })
  });

  describe('playFrame(firstScore, secondScore', () => {
    test('throws an error when firstScore is > 10', () => {
      expect(() => {
        frame.playFrame(11, 0);
      }).toThrow('Please enter numbers between 0 to 10');
    });

    test('throws an error when secondScore is > 10', () => {
      expect(() => {
        frame.playFrame(0, 11);
      }).toThrow('Please enter numbers between 0 to 10');
    });

    test('throws an error when frame score is > 10, but first and second score both <= 10', () => {
      expect(() => {
        frame.playFrame(8, 7);
      }).toThrow('Total score for a frame must not exceed 10');
    });
  });
});
