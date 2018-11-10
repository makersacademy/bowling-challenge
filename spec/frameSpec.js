describe("Frame", function() {

  var frame = new Frame();

  describe("#newFrame:", function () {
    it("running score is 0", function() {
      expect(frame.runningScore).toEqual(0);
    });
    it("current frame number is 1", function() {
      expect(frame.currentFrame).toEqual(1);
    });
  });

  describe("The first two frames:", function () {
    it("on the first frame it returns the frame score 8 and updates the running score to 8", function(){
      frame.information(3,5)
      expect(frame.runningScore).toEqual(8);
    });
    it("at the start of the second frame the current frame is 2", function() {
      expect(frame.currentFrame).toEqual(2);
    });
    it("on the second frame it returns the frame score 5 and updates the running score to 13", function() {
      frame.information(4,1)
      expect(frame.currentScore).toEqual(5);
      expect(frame.runningScore).toEqual(13);
    });
  });

})
