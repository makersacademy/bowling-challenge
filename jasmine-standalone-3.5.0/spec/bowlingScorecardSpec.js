'use strict';

describe('BowlingScorecard', function(){
  var bowlingScorecard;
  var frame1;
  var frame2;

  beforeEach(function(){
    bowlingScorecard = new BowlingScorecard();
    frame1 = new Frame(1);
    frame2 = new Frame(2);
  });
  describe('frame tracker', function(){
    it('begins with an empty array of frames', function(){
      expect(bowlingScorecard.FRAMES).toEqual([]);
    });
    it('can add a frame to the scorecard', function(){
      bowlingScorecard.addframe(frame1);
      expect(bowlingScorecard.FRAMES).toEqual([frame1])
    });
    it('can add a maximum of 10 frames to a scorecard', function(){
      for (let step = 0; step < 10; step++) {
        bowlingScorecard.addframe(frame1);
      }
      expect(bowlingScorecard.addframe(frame1)).toEqual('Game is over!')
    });
  });
  describe('cumulative score', function(){
    it('starts with a total score of 0', function(){
      expect(bowlingScorecard.SCORE).toEqual(0);
    });
    it('can add the points of two normal frames together and return the score', function(){
      frame1.POINTS = 6
      bowlingScorecard.addframe(frame1)
      frame2.POINTS = 5
      bowlingScorecard.addframe(frame2)
      bowlingScorecard.calculatescore()
      expect(bowlingScorecard.SCORE).toEqual(11)
    })
  });

});
