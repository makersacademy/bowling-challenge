describe("FrameSet", function() {
  var frameSet;

  beforeEach(function() {
    frameSet = new FrameSet();
  });

  describe("When instantiated, it:", function() {

    it("Displays the #currentFrame", function() {
      expect(frameSet.currentFrame).toEqual("frame1");
    });

    it("Displays the #previousFrame", function() {
      expect(frameSet.previousFrame).toEqual("frame0");
    });

    it("Sets the #MaxNumberFrames to 10", function() {
      expect(frameSet.MaxNumberFrames).toEqual(10);
    });
  });

  describe("#nextFrame", function() {

    it("Allows the user to move to the next frame", function() {
      frameSet.nextFrame();
      expect(frameSet.currentFrame).toEqual("frame2");
    });
  });
});
