'use strict';

describe('Frame', function () {

  var frame;

  beforeEach(function () {
    frame = new Frame();
  })

  describe('score', function () {
    
    it('has a default value of nothing', function () {
      expect(frame.score()).toEqual(undefined);  
    });

  })

  describe('pinsRemaining', function () {
    
    it('has a default of 10 pins remaining to knock down', function () {
      expect(frame.pinsRemaining()).toEqual(10);
    });
  
  });

  describe('roll', function () {
    
    it('knocks down a number of pins', function () {
      frame.roll(5)
      expect(frame.pinsRemaining()).toEqual(5);
    });
    it('throws an error if number to knock down is greater than the pins remaining', function () {
      expect(function () { frame.roll(11) }).toThrowError('number to knock down cannot be greater than the number of pins remaning');
    });
    it('wont allow more tham two rolls', function () {
      frame.roll(5)
      frame.roll(3)
      expect(function () { frame.roll(1) }).toThrowError('cannot roll more than twice for a frame');
    })

  });

  describe('rollNumber', function () {
    
    describe('first roll', function () {
      it('returns what roll the player is currently on', function () {
        expect(frame.rollNumber()).toEqual(1);
      });
    });

    describe('second roll', function () {
      it('returns what roll the player is currently on', function () {
        frame.roll(5)
        expect(frame.rollNumber()).toEqual(2);
      });
    });

  });

  describe('complete', function () {
    
    it('returns true when the frame has been completed', function () {
      frame.roll(3);
      frame.roll(7);
      expect(frame.isComplete()).toEqual(true);
    })
    
  })

});
