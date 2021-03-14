'use strict';


describe('BowlingScorecard', function() {
  let scorecard;

  beforeEach(function() {
    scorecard = new BowlingScorecard()
  });

  describe('Recording rolls', function() {
    it("can record a user's roll", function() {
      scorecard.recordRoll(6)
      expect(scorecard.totalScore()).toEqual(6);
    })
    it("only takes numbers under 11 as input", function() {
      expect( function() {scorecard.recordRoll("three")} ).toThrow ("Can only record numbers")
      expect( function() {scorecard.recordRoll("12")} ).toThrow ("Scores must be 0-10")
    })
  });


})

