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
      scorecard.repeat(3, 20);
      expect(scorecard.cumulativeScore).toEqual(60);
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
      expect(scorecard.cumulativeScore).toEqual(28);
    });

    it('gives a score of 60 if a turkey is immediately rolled', function(){
      scorecard.repeat(10, 3)
      expect(scorecard.cumulativeScore).toEqual(60);
    });

    it('gives a score of 90 if a 4 strikes are immediately rolled', function(){
      scorecard.repeat(10, 4)
      expect(scorecard.cumulativeScore).toEqual(90);
    });

    it('rewards a spare by giving a bonus of the next roll', function() {
      scorecard.roll(9);
      scorecard.roll(1);
      scorecard.roll(8);
      expect(scorecard.cumulativeScore).toEqual(26);
    });

    it('functions as expected after 2 spares', function(){
      scorecard.roll(8);
      scorecard.roll(2);
      scorecard.roll(5);
      scorecard.roll(5);
      scorecard.roll(1);
      expect(scorecard.cumulativeScore).toEqual(27);
    });

    it('allows 3 rolls in 10th frame if a spare or strike rolled', function(){
      scorecard.repeat(0, 18)
      scorecard.roll(10);
      scorecard.roll(2);
      scorecard.roll(3);
      expect(scorecard.cumulativeScore).toEqual(20);
    });
  });
});
