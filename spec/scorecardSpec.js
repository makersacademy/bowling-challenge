'use strict';

describe('Scorecard', function() {

  var scorecard;

  beforeEach(function() {
    scorecard = new Scorecard();
  });

  it('starts with an empty array for the total score', function(){
    expect(scorecard.totalScore).toEqual([])
  });


});
