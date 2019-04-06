// this requires strict use of javascript in testing. 
"use strict";

// creating the scorecard object before each test. 
describe("Scorecard", function(){
  var scorecard;
  beforeEach(function(){
    scorecard = new Scorecard()
  });

  describe(".total", function(){
    it("Has a score of 0 if 20 gutterballs", function() {
      for (var i = 0; i < 20; i++)
        scorecard.roll(0);
      expect(scorecard.total).toEqual(0);
    });
  });

  describe(".roll", function(){
    it("Expects the game to be complete if 20 balls are guttered", function() {
      for (var i = 0; i < 20; i++)
        scorecard.roll(0);
      expect(scorecard.isComplete()).toEqual(true);
    });
  });
  
  describe(".turn", function(){
    it("keeps track of the two turns per frame - if not a strike", function(){
      expect(scorecard.turn).toEqual(1)
        scorecard.roll();
      expect(scorecard.turn).toEqual(2)
        scorecard.roll();
      expect(scorecard.turn).toEqual(1)
    });
  });


  describe(".frame", function(){
    it("Knows what frame we are on", function() {
      expect(scorecard.frame).toEqual(1);
    });
    it("Increments up if i have rolled twice", function () {
      scorecard.roll();
      console.log(scorecard.roll);
      scorecard.roll();
      console.log(scorecard.roll);
      expect(scorecard.frame).toEqual(2);
    });
  });
});
