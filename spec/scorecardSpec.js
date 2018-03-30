'use strict';

describe('Scorecard:', function(){
  var scorecard;
  var rolls;


  it('returns the correct score for an open frame game', function(){
    scorecard = new Scorecard([
      4, 4, 4, 4, 4,
      4, 4, 4, 4, 4,
      4, 4, 4, 4, 4,
      4, 4, 4, 4, 4,
    ])
    expect(scorecard.calcScore(scorecard._rolls, 1 )).toBe(80)
  });
  it('returns the correct score for a perfect game', function(){
    scorecard = new Scorecard([
      10, 10, 10, 10,
      10, 10, 10, 10,
      10, 10, 10, 10
    ])
    expect(scorecard.calcScore(scorecard._rolls, 1)).toBe(300)
  });
  it('returns the correct score for all spares', function(){
    scorecard = new Scorecard([
      4, 6, 3, 7, 2,
      8, 1, 9, 3, 7,
      4, 6, 4, 6, 7,
      3, 4, 6, 2, 8, 3
    ])
    expect(scorecard.calcScore(scorecard._rolls, 1)).toBe(133)
  });
  it('returns the correct score for a rubbish game', function(){
    scorecard = new Scorecard([
      0, 0, 0, 0, 0,
      0, 0, 0, 0, 0,
      0, 0, 0, 0, 0,
      0, 0, 0, 0, 0,
    ])
    expect(scorecard.calcScore(scorecard._rolls, 1)).toBe(0)
  });
});
