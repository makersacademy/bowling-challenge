'use strict';

describe('Frame', function () {

  var frame;

  beforeEach(function () {
    frame = new Frame();
  })

  describe('bowls', function () {
    
    it('has a default value of 0', function () {
      expect(frame.bowls()).toEqual(jasmine.arrayContaining([]));  
    });
    it('returns the bowls counted in the frame', function () {
      frame.bowl(5)
      expect(frame.bowls()).toEqual(jasmine.arrayContaining([5]));  
    });

  })

  describe('pinsRemaining', function () {
    
    it('has a default of 10 pins remaining to knock down', function () {
      expect(frame.pinsRemaining()).toEqual(10);
    });
  
  });

  describe('bowl', function () {
    
    it('knocks down a number of pins', function () {
      frame.bowl(5)
      expect(frame.pinsRemaining()).toEqual(5);
    });
    it('wont allow to knock down more than the number of pins remaining', function () {
      expect(function () { frame.bowl(11) }).toThrowError('number to knock down cannot be greater than the number of pins remaning');
    });
    it('wont allow a bowl if the frame is complete', function () {
      frame.bowl(5)
      frame.bowl(3)
      expect(function () { frame.bowl(1) }).toThrowError('cannot bowl more than twice for a frame');
    })

  });

  describe('bowlNumber', function () {
    
    describe('first bowl', function () {
      it('returns what bowl the player is currently on', function () {
        expect(frame.bowlNumber()).toEqual(1);
      });
    });

    describe('second bowl', function () {
      it('returns what bowl the player is currently on', function () {
        frame.bowl(5)
        expect(frame.bowlNumber()).toEqual(2);
      });
    });

  });

  describe('isComplete', function () {
    
    it('returns true for a vanilla frame', function () {
      frame.bowl(3);
      frame.bowl(4);
      expect(frame.isComplete()).toEqual(true);
    });
    it('returns true for a strike', function () {
      frame.bowl(10);
      expect(frame.isComplete()).toEqual(true);
    });

  })

  describe('isPendingBonus', function () {
    
    it('returns false for a vanilla frame', function () {
      frame.bowl(3);
      frame.bowl(4);
      expect(frame.isPendingBonus()).toEqual(false);
    });
    it('returns true for spare', function () {
      frame.bowl(3);
      frame.bowl(7);
      expect(frame.isPendingBonus()).toEqual(true);
    });
    it('returns false once bonus added for spare', function () {
      frame.bowl(3);
      frame.bowl(7);
      frame.addBonus(8);
      expect(frame.isPendingBonus()).toEqual(false);
    });
    it('returns false once bonus added for strike', function () {
      frame.bowl(10);
      frame.addBonus(2);
      frame.addBonus(8);
      expect(frame.isPendingBonus()).toEqual(false);
    });

  });

  describe('addBonus', function () {
    
    it('allows a bonus to be added for a spare', function () {
      frame.bowl(3);
      frame.bowl(7);
      frame.addBonus(4);
      expect(frame.bowls()).toEqual(jasmine.arrayContaining([3,7,4])); 
    });
    it('allows a bonus to be added for a strike', function () {
      frame.bowl(10);
      frame.addBonus(4);
      frame.addBonus(2);
      expect(frame.bowls()).toEqual(jasmine.arrayContaining([10,4,2])); 
    });
    it('throws an error if a bonus is not expected', function () {
      frame.bowl(3);
      frame.bowl(4);
      expect(function () { frame.addBonus(4) }).toThrowError('Bonus cannot be added for this frame')
    });

  });

});
