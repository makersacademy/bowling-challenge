// this requires strict use of javascript in testing. 
"use strict";

// creating the scorecard object before each test. 
describe("Scorecard", function(){
  var scorecard;
  beforeEach(function(){
    scorecard = new Scorecard()
  });

  describe("New Scorecard", function(){
    it("Has a score of 0 if 20 gutterballs", function() {
      for (var i = 0; i < 20; i++)
        scorecard.roll(0);
      expect(scorecard.total()).toEqual(0);
    });
    it("Expects the game to be complete if 20 balls are guttered", function() {
      for (var i = 0; i < 20; i++)
        scorecard.roll(0);
    expect(scorecard.isComplete()).toEqual(true);
    });
  });
});
