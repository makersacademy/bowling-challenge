describe("Frame", function() {
  var frame = new Frame();

  describe("bowlOne", function() {

    it("Should have a bowlOne property", function() {
      expect(frame.bowlOne).toEqual(null)
    });

    it("Should assign a score of 6 to bowlOne", function() {
      frame.setBowlOneScore(6);
      expect(frame.bowlOne).toEqual(6)
    });

    it("Should return the value of bowlOne", function() {
      frame.setBowlOneScore(6);
      expect(frame.getBowlOneScore()).toEqual(6)
    });

  });

  describe("bowlTwo", function() {

    it("Should have a bowlTwo property", function() {
      expect(frame.bowlTwo).toEqual(null)
    });

    it("Should assign a score of 3 to bowlTwo", function() {
      frame.setBowlTwoScore(3);
      expect(frame.bowlTwo).toEqual(3)
    });

    it("Should return the value of bowlTwo", function() {
      frame.setBowlTwoScore(3);
      expect(frame.getBowlTwoScore()).toEqual(3)
    });

  });

  describe("Score", function() {

    it("Should have a score property", function() {
      expect(frame.score).toEqual([])
    });

    it("Should set the score for the frame to [4, 5]", function() {
      frame.setBowlOneScore(4);
      frame.setBowlTwoScore(5);
      frame.setFrameScore();
      expect(frame.score).toEqual([4, 5])
    });

    it("Should return the score for the frame", function() {
      frame.setBowlOneScore(4);
      frame.setBowlTwoScore(5);
      frame.setFrameScore();
      expect(frame.getScore()).toEqual([4, 5])
    });

  });
});
