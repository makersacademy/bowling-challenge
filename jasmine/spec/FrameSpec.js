'use strict';

describe("Frame", function() {

  var frame1
  var frame2

  beforeEach(function(){
    frame1 = new Frame(10)
    frame2 = new Frame(5)
  });

  describe("Upon instantiating", function() {

    it("is defined", function() {
      expect(frame1).toBeDefined();
    });

    it("assigns .isStrike to true if score1 = 10", function() {
      expect(frame1.isStrike).toBeTruthy();
    });
  });

});
