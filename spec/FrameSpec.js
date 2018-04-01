describe ("Frame", function() {

  beforeEach(function() {
    frame = new Frame();
  });

  describe ("Current frame is kept count of: ", function() {
    it("starts at 1", function(){
      expect(frame._currFrame).toEqual(1)
    });

    it("increments by 1 after score submission", function(){
      frame.nextFrame();
      expect(frame._currFrame).toEqual(2)
    });

    it("initiates an 11th frame if the 10th frame is a strike or spare", function() {
      for(var i = 1; i < 10; i++){
        frame.nextFrame(false);
      }
      frame.nextFrame(true);
      expect(frame._currFrame).toEqual(11);
    });

    it("ends the game on the 10th frame if score < 10", function() {
      for(var i = 1; i < 10; i++){
        frame.nextFrame(false);
      }
      expect(function() { frame.nextFrame(false); }).toThrow("Game Finished!");
    });
  });
});
