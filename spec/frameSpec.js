'use strict';

describe('Frame', function(){
  var frame


  beforeEach(function(){
    frame = new Frame();
  });

  describe('roll', function() {

    it('stores the number of pins knocked down', function() {
      frame.roll(7);
      expect(frame.rolls).toContain(7);
    });
  });
});
