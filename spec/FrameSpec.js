'use strict';

describe('Frame', function() {

  var frame;

  beforeEach(function() {
    frame = new Frame();
  });

  describe('frameElement', function () {
    it("has a frame with two elements", function(){
      expect(frame.frameElement).toEqual(['-','-']);
    });
  });

});
