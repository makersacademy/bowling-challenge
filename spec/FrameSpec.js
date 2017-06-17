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
    });

    it('Updates the second bowl', function() {
      frame.bowl(5);
      frame.bowl(3);
      expect(frame.bowls()).toEqual([5, 3]);
    });

    it('Does not allow player to bowl more than twice in one frame', function() {
      frame.bowl(5);
      frame.bowl(3);
      expect(function(){ frame.bowl(1); }).toThrow(new Error('Cannot bowl - this frame is complete'));
    });

    it('Does not allow player to bowl a second time after scoring 10', function() {
      frame.bowl(10);
      expect(function(){ frame.bowl(0); }).toThrow(new Error('Cannot bowl - this frame is complete'));
    });

    it('Prevents player from scoring more than the remaining pins', function() {
      expect(function(){ frame.bowl(11) }).toThrow(new Error('Error - cannot knock down more pins than are here! (10)'));
      frame.bowl(5)
      expect(function(){ frame.bowl(8) }).toThrow(new Error('Error - cannot knock down more pins than are here! (5)'));
    });
  });

  describe('isComplete', function() {

    it('Knows if the frame is complete', function() {
      expect(frame.isComplete()).toEqual(false);
      frame.bowl(5);
      frame.bowl(3);
      expect(frame.isComplete()).toEqual(true);
    });

    it('Knows the frame is complete after a strike', function() {
      frame.bowl(10);
      expect(frame.isComplete()).toEqual(true);
    });
  });

  describe('score', function() {

    it('Knows the total score of both bowls', function() {
      expect(frame.score()).toEqual(0);
      frame.bowl(4);
      expect(frame.score()).toEqual(4);
      frame.bowl(6);
      expect(frame.score()).toEqual(10);
    });
  });

  describe('isStrike', function() {

    it('Knows when it is a strike', function() {
      frame.bowl(10);
      expect(frame.isStrike()).toEqual(true);
    });

    it('Knows when it is not a strike', function() {
      frame.bowl(9);
      frame.bowl(1);
      expect(frame.isStrike()).toEqual(false);
    });
  });

  describe('isSpare', function() {

    it('Knows when it is a spare', function() {
      frame.bowl(9);
      frame.bowl(1);
      expect(frame.isSpare()).toEqual(true);
    });

    it('Knows when it is not a spare', function() {
      frame.bowl(8);
      frame.bowl(1);
      expect(frame.isSpare()).toEqual(false);
    });
  });

  describe('addSpareBonus', function() {

    it('Stores the bonus value', function() {
      frame.addSpareBonus(5);
      expect(frame._bonusScore).toEqual(5);
    });
  });
});
