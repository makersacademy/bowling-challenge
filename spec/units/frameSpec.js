'use strict';

describe('Frame', function() {
  var frame;

  beforeEach(function() { 
    frame = new Frame;
  });

  describe('at the start of the game', function(){

    it('.isNewFrame() returns true', function() {
      expect(frame.isNewFrame()).toEqual(true);
    });
  });

    it('empty test', function() {
    });
});
