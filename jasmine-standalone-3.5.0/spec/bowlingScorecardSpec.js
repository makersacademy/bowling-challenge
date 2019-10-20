'use strict';

describe('BowlingScorecard', function(){
  var bowlingScorecard;
  var frame;

  beforeEach(function(){
    bowlingScorecard = new BowlingScorecard();
    frame = new Frame(1);
  });
  describe('frame tracker', function(){
    it('begins with an empty array of frames', function(){
      expect(bowlingScorecard.FRAMES).toEqual([]);
    });
    it('can add a frame to the scorecard', function(){
      bowlingScorecard.addframe(frame);
      expect(bowlingScorecard.FRAMES).toEqual([frame])
    });
    it('can add a maximum of 10 frames to a scorecard', function(){
      for (let step = 0; step < 10; step++) {
        bowlingScorecard.addframe(frame);
      }
      expect(bowlingScorecard.addframe(frame)).toEqual('Game is over!')
    });
  });
  describe('cumulative score', function(){
    it('starts with a total score of 0', function(){
      expect(bowlingScorecard.SCORE).toEqual(0);
    });
  });

});
