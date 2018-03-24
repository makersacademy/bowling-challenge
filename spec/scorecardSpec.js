'use strict';

describe('Scorecard', function(){
  var scorecard;

  beforeEach(function(){
    scorecard = new Scorecard
  });
  it('returns the score', function(){
    expect(scorecard.score()).toBe(0)
  });
  it('adds the score', function(){
    scorecard.add(5)
    expect(scorecard.score()).toBe(5)
  });
  it('returns nil for a gutter game', function(){
    for(var i = 0; i < 20; i++){
      scorecard.add(0)
    }
    expect(scorecard.score()).toBe(0)
  })
})
