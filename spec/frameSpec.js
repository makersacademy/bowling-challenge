describe('Frame', function(){
  beforeEach(function(){
    frame = new Frame();
  });

  describe("adding scores below 10", function(){
    it("allows a score to be recorded for a frame", function(){
      frame.recordScore(3);
      expect(frame.balls).toContain(3);
    });

    it("sets the frame to not complete when scores have not been entered", function(){
      expect(frame.isComplete()).toBe(false);
    });

    it("sets the frame to be complete after two scores equalling less than 10", function(){
      frame.recordScore(3);
      frame.recordScore(4);
      expect(frame.isComplete()).toBe(true);
    });

    it("updates the frame total correctly", function(){
      frame.recordScore(3);
      frame.recordScore(4);
      expect(frame.frameTotal).toEqual(7);
    });

    it("doesn't add further scores to the frame after completion", function(){
      for(let i=0; i<3; i++) { frame.recordScore(3); }
      expect(frame.balls.length).not.toBe(3);
    });
  });

  describe("adding a strike", function() {
    it("sets the frame to complete after first roll of a strike", function(){
      frame.recordScore(10);
      expect(frame.isComplete()).toBe(true);
    });
  });

});
