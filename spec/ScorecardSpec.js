// 'use strict';

describe("Scorecard", function() {
  var scorecard;
  var roll_1;
  var roll_2;
  var _frames;

  beforeEach(function() {
    scorecard = new Scorecard();
  });

  describe('#score', function() {
    it('should start with a score of zero', function() {
      expect(scorecard.getScore()).toEqual(0);
    });

    it('calculates the score of two rolls', function() {
      scorecard.roll(4);
      scorecard.roll(5);
      expect(scorecard.getScore()).toEqual(9);
    });


    it('should save the two rolls into a frame', function() {
      scorecard.roll(4);
      scorecard.roll(5);
      expect(scorecard._frames).toEqual([4, 5]);
    });

    // it'should have a score of zero if no pins get knocked down in a game', function( {
    //   for (var = i;
    // })
  });
});
