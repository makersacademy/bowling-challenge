'use strict';

describe('Frame', function() {
  var frame;

  beforeEach(function() {
    frame = new Frame;
  });

  describe('bowls', function() {

    it('starts out as an array containing null, null', function() {
      expect(frame.bowls()).toEqual([null, null]);
    });

  });

  describe('bowl', function() {

    it('Updates the first bowl', function() {
      frame.bowl(5);
      expect(frame.bowls()).toEqual([5, null]);
    })

    it('Updates the second bowl', function() {
      frame.bowl(5);
      frame.bowl(3);
      expect(frame.bowls()).toEqual([5, 3]);
    })

    it('Does not allow player to bowl more than twice in one frame', function() {
      frame.bowl(5);
      frame.bowl(3);
      expect(function(){ frame.bowl(1); }).toThrow(new Error('Cannot bowl - this frame is complete'));
    });

    it('Does not allow player to bowl a second time after scoring 10', function() {
      frame.bowl(10);
      expect(function(){ frame.bowl(0); }).toThrow(new Error('Cannot bowl - this frame is complete'))
    });

    it('Prevents player from scoring more than the remaining pins', function() {
      expect(function(){ frame.bowl(11) }).toThrow(new Error('Error - cannot knock down more pins than are here! (10)'));
      frame.bowl(5)
      expect(function(){ frame.bowl(8) }).toThrow(new Error('Error - cannot knock down more pins than are here! (5)'))
    });
  });

  describe('isComplete', function() {
    it('Knows if the frame is complete', function() {
      expect(frame.isComplete()).toEqual(false);
      frame.bowl(5);
      frame.bowl(3);
      expect(frame.isComplete()).toEqual(true);
    });
  });
});
