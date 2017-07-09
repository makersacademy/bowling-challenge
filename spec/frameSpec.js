describe("Frame", function() {

  var frame;

  beforeEach (function() {
    frame = new Frame();
  });

  it("starts with an empty array of scores", function() {
    expect(frame.turn).toEqual([]);
  });

  it("starts with a score of 0", function() {
    expect(frame.score).toEqual(0);
  });

  describe("firstBowl", function() {
    it("adds the first score to the array", function() {
      frame.firstBowl(5);
      expect(frame.turn).toEqual([5]);
    });

    it("clears the array at the start of the method", function() {
      frame.firstBowl(5);
      frame.secondBowl(4);
      frame.firstBowl(6);
      expect(frame.turn).toEqual([6]);
    });
  });

  describe("secondBowl", function() {
    it("adds the second score to the array", function() {
      frame.firstBowl(5);
      frame.secondBowl(4);
      expect(frame.turn).toEqual([5,4]);
    });
  });

  describe("totalFrameScore", function() {
    it("adds the score for the frame", function(){
      frame.firstBowl(5);
      frame.secondBowl(4);
      frame.totalFrameScore()
      expect(frame.score).toEqual(9);
    });
  });

  describe("_isStrike", function() {
    it("recognises a strike", function() {
      frame.firstBowl(10);
      frame._isStrike();
      expect(frame.strike).toEqual(true);
      expect(frame.turn).toEqual([10,0]);
    });
  });

  describe("_isSpare", function(){
    it("recognises a spare", function() {
      frame.firstBowl(5);
      frame.secondBowl(5);
      frame._isSpare();
      expect(frame.spare).toEqual(true)
    });
  });
});
