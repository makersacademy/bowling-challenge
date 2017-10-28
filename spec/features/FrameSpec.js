'use strict';

describe('Frame', function () {

  var frame;

  beforeEach(function () {
    frame = new Frame();
  })

  describe('rolls', function () {
    
    it('has a default value of 0', function () {
      expect(frame.rolls()).toEqual(jasmine.arrayContaining([]));  
    });
    it('returns the rolls counted in the frame', function () {
      frame.roll(5)
      expect(frame.rolls()).toEqual(jasmine.arrayContaining([5]));  
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
    it('wont allow to knock down more than the number of pins remaining', function () {
      expect(function () { frame.roll(11) }).toThrowError('number to knock down cannot be greater than the number of pins remaning');
    });
    it('wont allow a roll if the frame is complete', function () {
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

  describe('isComplete', function () {
    
    it('returns true for a vanilla frame', function () {
      frame.roll(3);
      frame.roll(4);
      expect(frame.isComplete()).toEqual(true);
    });
    it('returns true for a strike', function () {
      frame.roll(10);
      expect(frame.isComplete()).toEqual(true);
    });

  })

  describe('isPendingBonus', function () {
    
    it('returns false for a vanilla frame', function () {
      frame.roll(3);
      frame.roll(4);
      expect(frame.isPendingBonus()).toEqual(false);
    });
    it('returns true for spare', function () {
      frame.roll(3);
      frame.roll(7);
      expect(frame.isPendingBonus()).toEqual(true);
    });
    it('returns false once bonus added for spare', function () {
      frame.roll(3);
      frame.roll(7);
      frame.addBonus(8);
      expect(frame.isPendingBonus()).toEqual(false);
    });
    it('returns false once bonus added for strike', function () {
      frame.roll(10);
      frame.addBonus(2);
      frame.addBonus(8);
      expect(frame.isPendingBonus()).toEqual(false);
    });

  });

  describe('addBonus', function () {
    
    it('allows a bonus to be added for a spare', function () {
      frame.roll(3);
      frame.roll(7);
      frame.addBonus(4);
      expect(frame.rolls()).toEqual(jasmine.arrayContaining([3,7,4])); 
    });
    it('allows a bonus to be added for a strike', function () {
      frame.roll(10);
      frame.addBonus(4);
      frame.addBonus(2);
      expect(frame.rolls()).toEqual(jasmine.arrayContaining([10,4,2])); 
    });
    it('throws an error if a bonus is not expected', function () {
      frame.roll(3);
      frame.roll(4);
      expect(function () { frame.addBonus(4) }).toThrowError('Bonus cannot be added for this frame')
    });

  });

});
