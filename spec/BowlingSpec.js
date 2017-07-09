'use strict';

describe('Bowling', function() {

  var bowling;

  beforeEach(function() {
    bowling = new Bowling();
  });

  var helperRoll = function(pins, rolls) {
    for (var i = 0; i < rolls; i++) {
      bowling.roll(pins);
  }
}; 

  describe('Inital conditions', function() {
    it('frameNumber set to 1', function() {
      expect(bowling.getFrameNumber()).toEqual(1);
    });
  });

  describe('nextFrame', function() {
    it('increments frameNumber', function() {
      bowling.nextFrame();
      expect(bowling.getFrameNumber()).toEqual(2);
    });

    it('resets pinsRemaining to 10', function() {
      bowling.nextFrame();
      expect(bowling.pinsRemaining).toEqual(10);
    });
  });
  describe('isFrameComplete', function() {
    it('frameNumber increments after 2 rolls', function() {
      helperRoll(3,2);
      expect(bowling.getFrameNumber()).toEqual(2);
    });

    it('frameNumber increments if strike bowled', function() {
      bowling.roll(10);
      expect(bowling.getFrameNumber()).toEqual(2);
    });
  });

  describe('roll', function() {
    it('reduces pins remaining', function() {
      bowling.roll(8);
      expect(bowling.pinsRemaining).toEqual(2);
    });

    it('cannot knock over more pins than are left', function() {
      bowling.roll(2);
      expect(function() { bowling.roll(9); }).toThrowError("Invalid number of pins knocked over");
    });
  });

  describe('getCurrentScore', function() {
    it('of a simple frame', function() {
      bowling.roll(3);
      bowling.roll(4);
      expect(bowling.getCurrentScore()).toEqual(7);
    });

    it('of a strike', function() {
      bowling.roll(10);
      bowling.roll(4);
      bowling.roll(5);
      expect(bowling.getCurrentScore()).toEqual(28);
    });

    it('of a spare', function() {
      helperRoll(5,3);
      bowling.roll(3);
      expect(bowling.getCurrentScore()).toEqual(23);
    });

    it('of an incomplete strike (without next 2 rolls)', function() {
      helperRoll(3,2);
      bowling.roll(10);
      expect(bowling.getCurrentScore()).toEqual(6);
    });

    it('of an incomplete spare (without next roll)', function() {
      helperRoll(3,2);
      bowling.roll(4);
      bowling.roll(6);
      expect(bowling.getCurrentScore()).toEqual(6);
    });
  });

  describe('tenth frame', function() {
    it('gets bonus if strike', function() {
      helperRoll(1,18);
      bowling.roll(10);
      bowling.roll(2);
      bowling.roll(5);
      expect(bowling.getCurrentScore()).toEqual(35);
    });

    it('gets bonus if spare', function() {
      helperRoll(2,18);
      bowling.roll(1);
      bowling.roll(9);
      bowling.roll(10);
      expect(bowling.getCurrentScore()).toEqual(56);
    });

    it('doesnt get a bonus if no strike or spare', function() {
      helperRoll(3,18);
      bowling.roll(2);
      bowling.roll(6);
      bowling.roll(5);
      expect(bowling.getCurrentScore()).toEqual(62);
    });
  });
});

