'use strict';

describe('Frame', function() {
  var frame;

  beforeEach(function() {
    frame = new Frame();
  });

  describe('Frames < 10', function() {
    it('starts with no bowls', function() {
      expect(frame.getbowls()).toEqual([]);
    });

    it('saves a bowl', function() {
      frame.bowl(1)
      expect(frame.getbowls()).toEqual([1]);
    });

    it('saves a second bowl', function() {
      frame.bowl(1)
      frame.bowl(9)
      expect(frame.getbowls()).toEqual([1,9]);
    });

    it('gets frame size of 2', function() {
      frame.bowl(1)
      frame.bowl(9)
      expect(frame.getFrameSize()).toEqual(2);
    });

    it('closes frame', function() {
      frame.bowl(1)
      frame.bowl(9)
      expect(frame.isFrameOpen()).toEqual(false);
    });

    it('raises an error when trying to bowl more than 2', function() {
      frame.bowl(1)
      frame.bowl(9)
      expect(frame.bowl(2)).toEqual("Only 2 bowls allowed")
    });
  });
});
