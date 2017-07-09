'use strict';

describe('Bowling', function() {

  var bowling;

  beforeEach(function() {
    bowling = new Bowling();
  });

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


  var helperRoll = function(pins, rolls) {
    for (var i = 0; i < rolls; i++) {
      bowling.roll(pins);
    }
  };
});

