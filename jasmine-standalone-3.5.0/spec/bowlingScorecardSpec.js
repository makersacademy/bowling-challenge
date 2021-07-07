'use strict';

describe('BowlingScorecard', function(){
  var bowlingScorecard;
  var frame1;
  var frame2;
  var roll;

  beforeEach(function(){
    bowlingScorecard = new BowlingScorecard();
    frame1 = new Frame(1);
    frame1.POINTS = 6
    frame2 = new Frame(2);
    frame2.POINTS = 9
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
      bowlingScorecard.updatecurrentframe(frame1)
      expect(bowlingScorecard.FRAMES[0]).toEqual(frame1)
    });

    it('can add two new frames to the array', function(){
      bowlingScorecard.updatecurrentframe(frame1)
      bowlingScorecard.updatecurrentframe(frame2)
      expect(bowlingScorecard.FRAMES[0]).toEqual(frame1)
      expect(bowlingScorecard.FRAMES[1]).toEqual(frame2)
    });

    it('updates the current frame tracker once a frame is added', function(){
      bowlingScorecard.updatecurrentframe(frame1)
      expect(bowlingScorecard.CURRENTFRAME).toEqual(2)
    });
  });

  describe('scoring', function(){
    it('can return the total of two non-bonus frames', function(){
      bowlingScorecard.updatecurrentframe(frame1)
      bowlingScorecard.updatecurrentframe(frame2)
      bowlingScorecard.updatescore()
      expect(bowlingScorecard.SCORE).toEqual(15)
    });
  });
});
