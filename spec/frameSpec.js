describe("Frame", function() {

  var frame;

  beforeEach (function() {
    frame = new Frame();
  });

  it("starts with an empty array of scores", function() {
    expect(frame.bowls).toEqual([]);
  });

  it("starts with a score of 0", function() {
    expect(frame.score).toEqual(0);
  });

  describe("firstBowl", function() {
    it("adds the first score to the array", function() {
      frame.firstBowl(5);
      expect(frame.bowls).toEqual([5]);
    });
  });

  describe("secondBowl", function() {
    it("adds the second score to the array", function() {
      frame.firstBowl(5);
      frame.secondBowl(5);
      expect(frame.bowls).toEqual([5,5]);
      expect(frame.spare).toEqual(true);
    });

    it("calculates the score for the frame", function(){
      frame.firstBowl(5);
      frame.secondBowl(4);
      frame._totalScore();
      expect(frame.score).toEqual(9);
    });

    it("checks if the frame has a strike", function() {
      frame.firstBowl(10);
      frame._isStrike();
      expect(frame.strike).toEqual(true);
      expect(frame.bowls).toEqual([10,0]);
    });

    it("checks if the frame has a spare", function() {
      frame.firstBowl(5);
      frame.secondBowl(5);
      frame._totalScore();
      frame._isSpare();
      expect(frame.spare).toEqual(true)
    });
  });
});
