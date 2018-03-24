'use strict';

describe('Scorecard', function(){
  var scorecard;

  beforeEach(function(){
    scorecard = new Scorecard()
  });
  it('returns the score', function(){
    expect(scorecard.score()).toBe(0)
  });
  it('adds the score', function(){
    scorecard.add(5)
    expect(scorecard.score()).toBe(5)
  });
  it('returns nil for a gutter game', function(){
    while (scorecard._frameCount <= 10){
      scorecard.roll(0)
    }
    expect(scorecard.score()).toBe(0)
  });
  it('returns the correct score for an open frame game', function(){
    while (scorecard._frameCount <= 10){
      scorecard.roll(4)
    }
    expect(scorecard.score()).toBe(80)
  });
});
