'use strict';

describe("Scorecard", function() {
  let scorecard;

  beforeEach(function() {
    scorecard = new Scorecard();
  });

  describe("calculateScore", function() {
    it("returns 0 for a game of 20 gutter balls (0 pins)", function() {
      for(let i = 0; i < 20; i++){
        scorecard.addRoll(0);
      }
      expect(scorecard.calculateScore()).toEqual(0)
    });

    it("returns 20 for a game of 20 rolls that knocked down 1 pin each", function() {
      for(let i = 0; i < 20; i++){
        scorecard.addRoll(1);
      }
      expect(scorecard.calculateScore()).toEqual(20)
    });
  });

});