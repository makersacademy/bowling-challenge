describe("Frame", function() {

  beforeEach(function() {
    frame = new Frame();
  });

  describe('Adding Scores', function() {
    it("should accept first score ", function() {
      frame.addScore(5);
      expect(frame.firstScore).toEqual(5);
    });

    it("should accept second score ", function() {
      frame.addScore(2);
      frame.addScore(6);
      expect(frame.secondScore).toEqual(6);
    });
  });

  describe('Frame Type', function() {
    it("Knows the result of the frame - normal", function() {
      frame.addScore(5);
      frame.addScore(1);
      expect(frame.frameResult()).toEqual('frame');
    });
    it("Knows the result of the frame - spare", function() {
      frame.addScore(5);
      frame.addScore(5);
      expect(frame.frameResult()).toEqual('spare');
    });
    it("Knows the result of the frame - strike", function() {
      frame.addScore(10);
      expect(frame.frameResult()).toEqual('strike');
    });
  });
  describe('Calculating Frame Score', function(){
    it('should return 0 on a gutter frame', function() {
      frame.addScore(0);
      frame.addScore(0);
      expect(frame.calculateScore()).toEqual(0);
    });

    it('should return sum of pins', function(){
      frame.addScore(2);
      frame.addScore(3);
      expect(frame.calculateScore()).toEqual(5);
    })
  });
  describe('Defending Against Edge Cases', function() {
    it("should not accept more than two scores", function() {
      frame.addScore(5);
      frame.addScore(1);
      expect(function(){frame.addScore(5)}).toThrow(new Error("The Frame is already over"));
    });
    it("should not accept two scores over 10", function() {
      frame.addScore(6);
      expect(function(){frame.addScore(7)}).toThrow(new Error("Max Score Reached"));
    });
  });
});
