const Frame = require('../lib/frame');

describe(Frame, () => {

  let frame;

  beforeEach(() => {
    frame = new Frame;
  });

  describe('rollOne(score)', () => {
    test('throws on error when number is not from 0 to 10', () => {
      expect(() => {
        frame.rollOne(11);
      }).toThrow('Please enter a number from 0 to 10');
    });
  });

  describe('rollTwo(score)', () => {
    test('throws on error when number is not from 0 to 10', () => {
      expect(() => {
        frame.rollTwo(11);
      }).toThrow('Please enter a number from 0 to 10');
    });
  });

  describe('getFrameScores()', () => {
    it('returns the frame score', () => {
      frame.rollOne(5);
      frame.rollTwo(4);
      expect(frame.getFrameScores()).toEqual([5, 4]);
    });

    it('returns 10 if player scores a strike', () => {
      frame.rollOne(10);
      expect(frame.getFrameScores()).toEqual([10, 0]);
    })
  });
});
