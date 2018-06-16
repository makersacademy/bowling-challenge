'use strict';

describe('Scorecard', function() {

  var scorecard;

  beforeEach(function() {
    scorecard = new Scorecard;
  });

  it('has a default total score of zero', function() {
    expect(scorecard.totalScore).toEqual(0);
  });

});
