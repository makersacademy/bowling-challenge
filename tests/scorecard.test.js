const Scorecard = require('../src/scorecard');

describe('Scorecard', () => {
  let scorecard;
  beforeEach(() => {
    scorecard = new Scorecard();
  })

  describe('addFrame', () => {
    it('starts with an empty frames array', () => {
      expect(scorecard.frames).toEqual([]);
    })

    it('adds one frame to frames array', () => {
      scorecard.addFrame(2, 2);

      expect(scorecard.frames[0].rolls).toEqual([2, 2]);
    })

    it('adds two frames to frames array', () => {
      scorecard.addFrame(2, 2);
      scorecard.addFrame(3, 4);

      expect(scorecard.frames[0].rolls).toEqual([2, 2]);
      expect(scorecard.frames[1].rolls).toEqual([3, 4]);
    })
  })

  describe('calculateScore after one frame', () => {
    it('calculates score after one zer frame', () => {
      scorecard.addFrame(0, 0);

      expect(scorecard.calculateScore()).toEqual(0);
    })

    it('calculates score after one simple frame', () => {
      scorecard.addFrame(2, 4);

      expect(scorecard.calculateScore()).toEqual(6);
    })
  })
})