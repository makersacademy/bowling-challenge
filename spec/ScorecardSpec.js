'use strict';

describe('Scorecard', function(){
  var scorecard;

  beforeEach(function(){
    scorecard = new Scorecard();
  });

  it('has a total score initially equal to zero', function(){
    expect(scorecard.getTotalScore()).toEqual(0);
  });

  it('has 10 frames', function(){
    expect(scorecard.getTotalScore()).toEqual(0);
  });

});