'use strict';

describe("Frame", function() {

  var frame

  beforeEach(function(){
    frame = new Frame
  });

  describe("Upon instantiating", function() {

    it("is defined", function() {
      expect(frame).toBeDefined();
    });

  });

});
