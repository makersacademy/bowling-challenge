'use strict';

describe('Bowling', function() {

  var bowling;

  beforeEach(function() {
    bowling = new Bowling();
  });

  describe('initially', function() {
    it('frameNumber: 1', function() {
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
    it('frameNumber increments if bowled twice', function() {
      multiRoll(3,2);
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

    it('raises error if pins > pinsRemaining', function() {
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
      multiRoll(5,3);
      bowling.roll(3);
      expect(bowling.getCurrentScore()).toEqual(23);
    });

    it('of an incomplete strike (without next 2 rolls)', function() {
      multiRoll(3,2);
      bowling.roll(10);
      expect(bowling.getCurrentScore()).toEqual(6);
    });

    it('of an incomplete spare (without next roll)', function() {
      multiRoll(3,2);
      bowling.roll(4);
      bowling.roll(6);
      expect(bowling.getCurrentScore()).toEqual(6);
    });

    describe('full game simulation', function() {
      it('can roll a gutter game', function() {
        multiRoll(0,20);
        expect(bowling.getCurrentScore()).toEqual(0);
      });

      it('can roll all threes', function() {
        multiRoll(3,20);
        expect(bowling.getCurrentScore()).toEqual(60);
      });

      it('can roll a spare', function() {
        bowling.roll(5);
        bowling.roll(5);
        bowling.roll(3);
        multiRoll(0,17);
        expect(bowling.getCurrentScore()).toEqual(16);
      });

      it('can roll a strike', function() {
        bowling.roll(10);
        bowling.roll(4);
        bowling.roll(3);
        multiRoll(0,16);
        expect(bowling.getCurrentScore()).toEqual(24);
      });

      it('can roll a 12 strike perfect game', function() {
        multiRoll(10,12);
        expect(bowling.getCurrentScore()).toEqual(300);
      });
    });
  });

  var multiRoll = function(pins, rolls) {
    for (var i = 0; i < rolls; i++) {
      bowling.roll(pins);
    }
  };
});
