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

  describe("Spare", function() {
    it("Should have a spare property that is false by default", function() {
      expect(frame.spare).toEqual(false)
    });

    it("Should be changed to true if the player scores ten between both bowls, but not on just the first one", function() {
      frame.setBowlOneScore(2);
      frame.setBowlTwoScore(8);
      frame.setFrameScore();
      expect(frame.spare).toEqual(true)
    });
  });

  describe("Strike", function() {
    it("Should have a strike property that is false by default", function() {
      expect(frame.strike).toEqual(false)
    });

    it("Should set bowlTwo to '-' if player scores ten on bowlOne", function() {
      frame.setBowlOneScore(10);
      expect(frame.getBowlTwoScore()).toEqual('-')
    });

    it("Should be changed to true if the player scores ten on their first bowl", function() {
      frame.setBowlOneScore(10);
      frame.setFrameScore();
      expect(frame.strike).toEqual(true)
    });
  });
});
