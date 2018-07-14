'use strict';

describe('Scorecard', function() {

  var scorecard;

  beforeEach(function() {
    scorecard = new Scorecard();
  });

  it('the total score starts at 0', function(){
    expect(scorecard.totalScore).toEqual(0)
  });

  it('allows a user to enter a roll', function(){
    scorecard.roll(5)
    expect(scorecard.frame).toEqual([5])
  });

  it('allows a user to enter a second roll', function(){
    scorecard.roll(5)
    scorecard.roll(1)
    expect(scorecard.frame).toEqual([5,1])
  })


});
