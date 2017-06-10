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
  });
});
