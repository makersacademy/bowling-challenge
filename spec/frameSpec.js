describe("Frame", function() {
  var frame;

  beforeEach(function() {
    frame = new Frame();
  });

  describe("New frame", function() {
    it("starts with null as the current roll", function() {
      expect(frame.currentRoll()).toEqual(null);
    });
  });

  describe("Bowling balls", function() {
    it("stores the first ball's score", function() {
      expect(frame.bowlFirstBall(5)).toEqual(5);
    });

    it("stores the second ball's score", function() {
      expect(frame.bowlSecondBall(3)).toEqual(3);
    });
  });

  describe("Calculating a frame's score", function() {
    it("adds up the score for both bowls", function() {
      frame.bowlFirstBall(5);
      frame.bowlSecondBall(1);
      frame.calculateFrameTotal();
      expect(frame.currentRoll()).toEqual(6);
    });

    it("marks \"X\" as the score for a strike", function() {
      frame.bowlFirstBall(10);
      frame.calculateFrameTotal();
      expect(frame.currentRoll()).toEqual("X");
    });

  });
});
