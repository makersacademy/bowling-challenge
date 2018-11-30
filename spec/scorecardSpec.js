'use strict';

describe('Scorecard', function() {

  var scorecard

  beforeEach(function() {
    scorecard = new Scorecard()
  })

  it('starts with 0 points', function() {
   expect(scorecard.getCurrentScore()).toEqual(0)
  })

})
