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
      expect( function() {scorecard.recordRoll("-2")} ).toThrow ("Scores must be 0-10")
    })
  });

  describe('Recording a frame', function(){
    it("can record a frame and track its score", function() { 
      scorecard.recordRoll(3)
      scorecard.recordRoll(5)
      scorecard.recordRoll(2)
      scorecard.recordRoll(1)
      scorecard.recordRoll(8)
      expect(scorecard.frameScore(1)).toEqual(8);
      expect(scorecard.frameScore(2)).toEqual(3);
      expect(scorecard.frameScore(3)).toEqual(8);
    })
    describe("10th frame", function() {
      
      it("ends the game if no strike or spare in two rolls", function() { 
        for(let i=0; i < 18; i++) {
          scorecard.recordRoll(2);
        }
        scorecard.recordRoll(3)
        scorecard.recordRoll(3)
        expect(scorecard.totalScore()).toEqual(42);
        expect( function() { scorecard.recordRoll(6) } ).toThrow ("Game is finished")
      })
    
  });


})

});
