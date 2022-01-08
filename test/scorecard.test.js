const Scorecard = require('../lib/scorecard.js')

describe('Scorecard', () => {
  let scorecard;
  beforeEach(() => {
    scorecard = new Scorecard();
  });

  test('Scorecard initializes with an empty array and frame', () => {
    expect(scorecard.framesArray).toEqual([]);
    expect(scorecard._frame).toEqual([]);
  });

  describe('.addRoll', () => {
    test('adds a roll to the frame', () => {
      scorecard.addRoll(2)
      expect(scorecard._frame).toEqual([2]);
    })
  });

});