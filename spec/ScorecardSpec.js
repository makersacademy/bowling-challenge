"use strict";

describe("Scorecard", function() {

  var scorecard;

  beforeEach(function() {
    scorecard = new Scorecard();
  });

  describe('#roll', function() {
    it('records overall score when a score is input', function() {
      var times = 20;
      for(var i=0; i < times; i++){
        scorecard.roll(3);
      };
      expect(scorecard.score).toEqual(60);
    });
  });
});
