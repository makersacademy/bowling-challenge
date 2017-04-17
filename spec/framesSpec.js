(function () {
   'use strict';
}());

describe("bowling game", function() {
  var frame;

  beforeEach(function() {
    frame = new Frame();
  });

  describe("frame", function() {
    //As a bowler,
    //I want to take 2 shots in a frame
    //so that I can complete it
    it("starts with a first shot", function() {
      expect(frame.firstShotScore).toEqual(0)
    });

    it("ends with a second shot", function() {
      expect(frame.secondShotScore).toEqual(0)
    });
  });

});