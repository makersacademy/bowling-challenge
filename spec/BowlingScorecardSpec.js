'use strict';


describe('BowlingScorecard', function() {
  let scorecard;

  beforeEach(function() {
    scorecard = new BowlingScorecard()
  })

  it("can record a user's roll", function() {
    scorecard.recordRoll(6)
    expect(scorecard.totalScore()).toEqual(6);
  })



})

