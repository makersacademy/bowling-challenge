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
  })
})
