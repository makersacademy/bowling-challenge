"use strict";

describe("Scorecard", function() {

  var scorecard;

  beforeEach(function() {
    scorecard = new Scorecard();
  });

  describe('#roll', function() {
    it('raises an error if one roll is greater than 10', function(){
      expect(function() { scorecard.roll(11) }).toThrowError("There is a maximum of 10 pins per frame");
    });

    it('raises an error if more than 10 pins inputted for one frame', function(){
      scorecard.roll(4);
      expect(function() { scorecard.roll(7) }).toThrowError("There is a maximum of 10 pins per frame");
    });

    it('records overall score when a full game has been played', function() {
      var times = 20;
      for(var i=0; i < times; i++){
        scorecard.roll(3);
      };
      expect(scorecard.score).toEqual(60);
    });

    it('ends the frame early if strike rolled', function() {
      var times = 4;
      for(var i=0; i < times; i++){
        scorecard.roll(10);
      };
      expect(scorecard.allFrames.length).toEqual(4);
    });

    it('rewards a strike by giving a bonus of the next 2 rolls', function() {
      scorecard.roll(10);
      scorecard.roll(8);
      scorecard.roll(1);
      expect(scorecard.allFrames[0]).toEqual(19);
    });

    it('rewards a spare by giving a bonus of the next roll', function() {
      scorecard.roll(9);
      scorecard.roll(1);
      scorecard.roll(8);
      expect(scorecard.allFrames[0]).toEqual(18);
    });
  });
});
