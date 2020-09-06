'use strict';

describe('Frame', function() {

  var frame;

  beforeEach(function() {
    frame = new Frame;
  });

  describe('bowl', function() {
    it('adds score to first bowl on first go',  function(){
      frame.bowl(5);
      expect(frame.firstBowl).toEqual(5);
    });

    it('adds score to second bowl on second go', function(){
      frame.bowl(5);
      frame.bowl(2);
      expect(frame.secondBowl).toEqual(2);
    });


  });


});
