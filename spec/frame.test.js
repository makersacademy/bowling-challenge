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

    test('throws an error when frame score is not an int', () => {
      expect(() => {
        frame.playFrame('L', NaN);
      }).toThrow('Scores must be integers');
    });
  });

  describe('bonusSpareRoll(score)', () => {
    test('throws an error when score is > 10', () => {
      expect(() => {
        frame.bonusSpareRoll(11);
      }).toThrow('Please enter numbers between 0 to 10');
    });

    test('throws an error when score is not an int', () => {
      expect(() => {
        frame.bonusSpareRoll('a');
      }).toThrow('Scores must be integers');
    });
  });

  describe('bonusStrikeRolls(firstScore, secondScore)', () => {
    test('throws an error when firstScore is > 10', () => {
      expect(() => {
        frame.bonusStrikeRolls(11, 0);
      }).toThrow('Please enter numbers between 0 to 10');
    });

    test('throws an error when secondScore is > 10', () => {
      expect(() => {
        frame.bonusStrikeRolls(5, 11);
      }).toThrow('Please enter numbers between 0 to 10');
    });

    test('throws an error when score is not an int', () => {
      expect(() => {
        frame.bonusStrikeRolls('a', null);
      }).toThrow('Scores must be integers');
    });
  });

  describe('getBonusRollScores()', () => {
    it('returns the score from a bonus spare roll', () => {
      frame.bonusSpareRoll(5);
      expect(frame.getBonusRollScores()).toEqual([5, 0]);
    })

    it('returns the scores from bonus strike rolls', () => {
      frame.bonusStrikeRolls(7, 6);
      expect(frame.getBonusRollScores()).toEqual([7, 6]);
    })
  })
});