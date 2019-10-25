'use strict';

describe('BowlingScorecard', function(){
  var bowlingScorecard;
  var frame1;
  var roll;

  beforeEach(function(){
    bowlingScorecard = new BowlingScorecard();
    frame1 = new Frame(1)
  });
  describe('initial setup', function(){

    it('initializes with a score of 0', function(){
      expect(bowlingScorecard.SCORE).toEqual(0)
    });

    it('initiliazes with a current frame of 1', function(){
      expect(bowlingScorecard.CURRENTFRAME).toEqual(1)
    });

    it('initiliazes with a current roll of 1', function(){
      expect(bowlingScorecard.CURRENTROLL).toEqual(1)
    });
  });

  describe('adding new frames', function(){

    it('can add a new frame to the array', function(){
      bowlingScorecard.updateframe(frame1)
      expect(bowlingScorecard.FRAMES[0]).toEqual(frame1)
    });

    it('updates the current frame tracker once a frame is added', function(){
      bowlingScorecard.updateframe(frame1)
      expect(bowlingScorecard.CURRENTFRAME).toEqual(2)
    });
  });
});
