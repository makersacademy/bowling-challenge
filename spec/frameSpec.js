describe("Frame", function() {

  var frame;

beforeEach (function() {
  frame = new Frame();
});

  it("starts with an empty array of scores", function() {
    expect(frame.turn).toEqual([]);
  });

  describe("firstBowl", function() {
    it("adds the first score to the array", function() {
      frame.firstBowl(5);
      expect(frame.turn).toEqual([5]);
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
      expect(frame.totalFrameScore()).toEqual(9);
    })
  })
});
